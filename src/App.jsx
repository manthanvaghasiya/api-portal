import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import AgentLoginDetail from './sandbox/AgentLoginDetail';
import Home from './pages/Home';
import StrategicPartners from './pages/StrategicPartners';
import FAQ from './pages/FAQ';
import ExploreAPIs from './pages/ExploreAPIs';
import Sandbox from './pages/Sandbox';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
// import AccountStatementDetail from './sandbox/AccountStatementDetail';
// import AddFundsDetail from './sandbox/AddFundsDetail';
// import BankStatementDetail from './sandbox/BankStatementDetail';
import ApiDetailTemplate from './sandbox/ApiDetailTemplate';
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Your top navigation menu */}
      <Navbar />

      {/* Your changing pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<StrategicPartners />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/explore" element={<ExploreAPIs />} />
          {/* <Route path="/sandbox" element={<Sandbox />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/api/agent-login" element={<AgentLoginDetail />} />
          <Route path="/api/account-statement" element={<AccountStatementDetail />} />
          <Route path="/api/add-funds" element={<AddFundsDetail />} />
          <Route path="/api/bank-statement" element={<BankStatementDetail />} /> */}
          <Route path="/api/:slug" element={<ApiDetailTemplate />} />
          <Route 
            path="/sandbox" 
            element={
              <ProtectedRoute>
                <Sandbox />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>

      {/* Your bottom footer */}
      <Footer />
    </div>
  );
}