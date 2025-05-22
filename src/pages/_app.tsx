import "@/styles/globals.css";

import "/public/css/bootstrap.min.css";
import "/public/style.css";
import "/public/css/versions.css";
import "/public/css/responsive.css";
import "/public/css/custom.css";
import "/public/css/custom.css";
    
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
