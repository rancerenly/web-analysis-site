import { useEffect, useState } from "react";
import Main from "@/pages/main";
import Spinner from "@/components/spinner";

type LoadState = "initial" | "loading" | "done";

function App(): JSX.Element {
  const [loading, setLoading] = useState<LoadState>("initial");

  useEffect(() => {
    setLoading("loading");
    window.ym(99222941, "getClientID", function (clientID) {
      const digits = Number(clientID.toString().slice(-2));
      const version = Math.floor(digits / 25) + 1;
      localStorage.setItem("a-b-test-variant", version.toString());
      ym(99222941, "userParams", {
        version: version,
      });
    });
    setLoading("done");
  }, []);

  return <>{loading !== "done" ? <Spinner /> : <Main />}</>;
}

export default App;
