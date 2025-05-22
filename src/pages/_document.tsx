import { Html, Head, Main, NextScript } from "next/document";
// import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <script src="../../js/modernizer.js" async></script>
      <script src="../../js/all.js" async></script>
      <script src="../../js/custom.js" async></script>
      {/* <script src="../../js/timeline.min.js" async></script>  */}

    
     
    
      
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
