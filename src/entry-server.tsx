import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticRouter } from "react-router-dom/server";


interface IRenderProps {
  path: string;
}

export function render({ path }: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    // <BrowserRouter>
    <StaticRouter location={path}>
    <App />
  </StaticRouter>
    // {/* </BrowserRouter> */}
  )
  return { html }
}
