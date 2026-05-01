import { Link, Outlet, useLocation } from "react-router-dom"

import { 
  LayoutDashboard, 
  ClipboardList,
  Building2, 
  Users, 
  UserCheck, 
  Handshake,
  LogOut,
  Moon,
  Sun,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
// import { cn } from "@/lib/utils";
const navItems = [
    { icon : LayoutDashboard, path :"/",label: "Dashboard"},
    { icon: Users, label: "Clients", path: "/clients" },
    { icon: Building2, label: "Property", path: "/property" },
    { icon: ClipboardList, label: "Listings", path: "/listings" },
]
function Layout()
{
    const [isMobileMenuOpen, SetMobileMenu] = useState(false);
    const location = useLocation();
    return (
        <div className="min-h-screen ">
            {/* Desktop Sidebar */}
            <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r lg:block">
                <div className="flex h-full flex-col">

                    {/* Logo */}
                    <div className="flex h-16 items-center gap-3 border-b px-3">
                        <div className="h-9 w-9 rounded-lg flex items-center justify-center bg-amber-200">
                            <Building2 className="w-5 h-5"/>
                        </div>
                        <span className="text-xl font-bold text-foreground">Propventory </span>
                    </div>

                    {/* Navbar */}
                    <nav  className="flex-1 space-y-1 p-4">
                        {navItems.map((item)=>{
                            return(
                            <Link to={item.path}
                                  className="flex">
                                {item.label}
                            </Link>)
                        })}
                    </nav>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="fixed lg:hidden left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b px-4">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                        <Building2 className="h-4 w-4" />
                    </div>
                    <span className="text-lg font-bold text-foreground">Propventory</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center">
                        <Sun className="h-5 w-5" />
                    </button>
                    <button className="flex items-center justify-center">
                        <Moon className="h-5 w-5" />
                    </button>
                    <button onClick={() => SetMobileMenu(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

            </header>
            {/* MobileMenu */}

            {isMobileMenuOpen && (<div className="fixed inset-0 z-40 pt-16 lg:hidden">
                <nav  className="flex-1 space-y-1 p-4">
                    {navItems.map((item)=>{
                        return(
                        <Link to={item.path}
                                className="flex">
                            {item.label}
                        </Link>)
                    })}
                </nav>
            </div>)}

            <div className="lg:ml-64 pt-16 lg:pt-0 flex-1">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;