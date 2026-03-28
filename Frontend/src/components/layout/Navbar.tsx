import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { UserButton } from "@neondatabase/neon-js/auth/react";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--color-foreground)]"
        >
          <Dumbbell className="w-6 h-6 text-[var(--color-accent)]" />
          <span className="font-semibold text-lg">Aithletix</span>
        </Link>
        <nav>
          {user ? (
            <>
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Hide text on very small screens */}
                <Link to="/profile">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hidden sm:inline-flex"
                  >
                    My Plan
                  </Button>
                </Link>

                {/* User Button */}
                <UserButton className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-(--color-accent) transition-all hover:bg-[#84cc16] cursor-pointer" />
              </div>
            </>
          ) : (
            <>
              <Link to="/auth/sign-in">
                <Button size="sm" variant="ghost">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/sign-up">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
