"use client";

// import { Link } from "lucide-react";

// ... similar imports as in Login ...
import Link from "next/link";

export default function Signup() {
  // ... similar session and loading logic as in Login ...

  return (
    <div>
      <h2>Signup</h2>
      {/* ... your signup form ... */}
      <p>
        Already have an account? <Link href="/authentication/login">Login</Link>
      </p>
    </div>
  );  
}
