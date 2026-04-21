import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AdminProvider, useAdmin } from "@/admin/context";

// Public pages
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import TechAI from "@/pages/tech-ai";
import Frameworks from "@/pages/frameworks";
import Advisory from "@/pages/advisory";
import Content from "@/pages/content";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";

// Admin pages
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminBlog from "@/pages/admin/blog";
import BlogEditor from "@/pages/admin/blog-editor";
import AdminMedia from "@/pages/admin/media";
import FrameworksAdmin from "@/pages/admin/frameworks-admin";
import AdminSecurity from "@/pages/admin/security";
import AdminPageHome from "@/pages/admin/page-home";
import AdminPageAbout from "@/pages/admin/page-about";
import AdminPageTechAI from "@/pages/admin/page-tech-ai";
import AdminPageAdvisory from "@/pages/admin/page-advisory";
import AdminPageContent from "@/pages/admin/page-content";

const queryClient = new QueryClient();

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { user, loading } = useAdmin();
  if (loading) return (
    <div className="min-h-screen bg-[#0a0a0e] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-[#c9a84c]/30 border-t-[#c9a84c] rounded-full animate-spin" />
    </div>
  );
  if (!user) return <Redirect to="/admin/login" />;
  return <Component />;
}

function Router() {
  return (
    <Switch>
      {/* Public */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/tech-ai" component={TechAI} />
      <Route path="/frameworks" component={Frameworks} />
      <Route path="/advisory" component={Advisory} />
      <Route path="/content" component={Content} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />

      {/* Admin — Auth */}
      <Route path="/admin/login" component={AdminLogin} />

      {/* Admin — Page Editors */}
      <Route path="/admin/pages/home" component={() => <ProtectedRoute component={AdminPageHome} />} />
      <Route path="/admin/pages/about" component={() => <ProtectedRoute component={AdminPageAbout} />} />
      <Route path="/admin/pages/tech-ai" component={() => <ProtectedRoute component={AdminPageTechAI} />} />
      <Route path="/admin/pages/advisory" component={() => <ProtectedRoute component={AdminPageAdvisory} />} />
      <Route path="/admin/pages/content" component={() => <ProtectedRoute component={AdminPageContent} />} />

      {/* Admin — Content & Media */}
      <Route path="/admin/blog/new" component={() => <ProtectedRoute component={BlogEditor} />} />
      <Route path="/admin/blog/:id" component={() => <ProtectedRoute component={BlogEditor} />} />
      <Route path="/admin/blog" component={() => <ProtectedRoute component={AdminBlog} />} />
      <Route path="/admin/frameworks/new" component={() => <ProtectedRoute component={FrameworksAdmin} />} />
      <Route path="/admin/frameworks/:id" component={() => <ProtectedRoute component={FrameworksAdmin} />} />
      <Route path="/admin/frameworks" component={() => <ProtectedRoute component={FrameworksAdmin} />} />
      <Route path="/admin/media" component={() => <ProtectedRoute component={AdminMedia} />} />
      <Route path="/admin/security" component={() => <ProtectedRoute component={AdminSecurity} />} />
      <Route path="/admin/dashboard" component={() => <ProtectedRoute component={AdminDashboard} />} />
      <Route path="/admin" component={() => <Redirect to="/admin/dashboard" />} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AdminProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </AdminProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
