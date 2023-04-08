import React from 'react';
import PageHeader from "../components/HomePageHeader.js";
import Footer from "../components/Footer.js";


// function Home() {
//     return (
//         <h1>this is the homepage</h1>
//     );
// }

// export default Home;

// function Result() {
//   return (
      
//       <h1>this is the result page</h1>
//   );
// }

// export default Result;

export default function ResultsPage() {
  React.useEffect(() => {
    document.body.classList.toggle("results-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("results-page");
    };
  }, []);
  return (
      <>
        {/* <IndexNavbar /> */}
        <div className="wrapper">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>this is the result page</h1>
        <h1 class="display-5">Prediction</h1>
        {/* {% if predictions %} */}
        {/* <h2 class="display-4 text-dark font-weight-bold">{{predictions}}</h2> */}
        {/* {% else %} */}
        {/* <h2 class="display-4 text-dark font-weight-bold">{{err}}</h2> */}
        {/* {% endif %} */}
        <h2 class="display-5">Confidence Score: </h2>
        <h3 class="display-4 font-weight-bold">0.895</h3>
          <div className="main">
          </div>
      </div>
    </>
  );
}