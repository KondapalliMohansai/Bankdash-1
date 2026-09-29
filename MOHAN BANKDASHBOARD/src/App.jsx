import { Routes, Route } from "react-router-dom";

import PageLayout from "./Components/PageLayout";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Transactions from "./Pages/Transactions";
import Accounts from "./Pages/Accounts";
import Investments from "./Pages/Investments";
import CreditCards from "./Pages/CreditCards";
import Loans from "./Pages/Loans";
import Services from "./Pages/Services.jsx";
import Privileges from "./Pages/Privileges";
import Settings from "./Pages/Settings";
import EditProfile from "./Pages/EditProfile";
import Preferences from "./Pages/Preferences";
import Security from "./Pages/Security";


export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>

        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privileges" element={<Privileges />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/profile" element={<EditProfile />}/>
        <Route path="/settings/preferences" element={<Preferences />}/>
        <Route path="/settings/security" element={<Security />}/>

      </Route>
    </Routes>
  );
}
