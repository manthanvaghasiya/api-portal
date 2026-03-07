import jwt from "jsonwebtoken";

// The Backend Bouncer
export const verifyToken = (req, res, next) => {
  // 1. Look for the ticket in the header of the request
  const token = req.header("Authorization");

  // 2. If there is no ticket, stop them right here
  if (!token) {
    return res.status(401).json({ message: "Access Denied! You need a ticket to enter." });
  }

  try {
    // 3. Check if the ticket is real using our Secret Stamp
    // We split it because tokens are usually sent as "Bearer [token_string]"
    const actualToken = token.split(" ")[1]; 
    const verified = jwt.verify(actualToken, process.env.JWT_SECRET);
    
    // 4. Attach the user's ID to the request so the next function knows who they are
    req.user = verified;
    
    // 5. Open the door (move to the next step)
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid or expired ticket." });
  }
};