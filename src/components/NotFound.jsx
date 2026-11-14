import { Link } from "react-router-dom";
import Header from "../site/Header";

function NotFound() {
  return (
    <>
      <Header sections={false} />
      <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
        <p className="font-mono text-sm font-semibold text-brand-ink">404</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">This page is not here</h1>
        <p className="mt-4 text-lg text-muted">The address may be mistyped, or the page has moved.</p>
        <Link to="/" className="btn-brand mt-8">Go to the home page</Link>
      </main>
    </>
  );
}

export default NotFound;
