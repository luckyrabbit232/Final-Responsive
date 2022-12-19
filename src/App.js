import logo from './logo.svg';
import './css/App.css';
import PortofolioBox from './components/PortfolioBox';
import data from './assets/portfolio-data.json'
import { useState } from 'react';

// TODO:
// 1: Create Header
// 2: Create Button and image introduction
// 3: Write Introduction
// 4: Write Problem
// 5: Write Goals
// 6: Write Design
// 7: Write reflection
// 8: Do you may also like components

function App() {
  const [displayPortofolio, setPortfolio] = useState(data);

  return (
    <div className="App">
      <div className = "Header">
        <div className = "UpperHeader">
          <div className = "Logo">
             My Portfolio
          </div>
          <div className = "Menu">
            <div className = "Menu_Child">
              <a href = "https://luckyrabbit232.github.io/Final-Portoflio/" className = "Hyperlink">
                Home
              </a>
            </div>
            <div className = "Menu_Child2">
              <a href = "https://luckyrabbit232.github.io/Final-Portoflio/" className = "Hyperlink">
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className = "Introduction">
        <div className = "Button_Container">
          <div className = "TextBox_text">
            Responsive Redesign
          </div>
          <a href = 'https://luckyrabbit232.github.io/Zara_redesign/'>
            <button  className = "Button">Website Link</button>
          </a>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Introduction
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            We had the chance to find a website to recreate, incorporating design 
            philosophy taught in class. I chose the Zara webpage since, although looked 
            visually appealling, was poorly thought out regarding the affordances for user 
            experience. I had to create designs for the website and a mobile version.
            </p>
          </div>
        </div>
        <div className = "Basic_ImageContainer">
          <img src = "./Images/zara.JPG" className = "Basic_Image1"></img>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Problem
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            There were issues concerning the learnibility, usability, memorability, 
            and accessibility of the website. Some issues were outlined below:
            </p>
            <ul>
              <li><b>Learnability:</b> The buttons had to text indicating what they were used for</li>
              <li><b>Usability:</b> There were no buttons to lead you out of the page you came from</li>
              <li><b>Memorability:</b> Prices and coat design were hard to remember and compare due to whitespacing</li>
              <li><b>Accessibility:</b> Most of the texts were very small </li>
            </ul> 
            <p>
            Based on these principles, I sought to redesign the webpage through the processes as a UI developer.
            </p>
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Goals
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBoxGoal_Child">
            <p>
            The technical goals of this assignment are as follows:
            </p>
            <ul>
              <li>Analyze the usability issues concerning Zara</li>
              <li>Create a Lo-Fi prototype on Balsamiq</li>
              <li>Create a Hi-Fi prototype including visual design guide</li>
              <li>Deploy website on Github Pages</li>
            </ul> 
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Design
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <b>Solving the usability issues:</b>
            <p>
            After outlining the usability issues detailed above, 
            I sought to redesign the webpage. I focused on creating buttons that had text, 
            formatting the items so that they are closer to each other for easier comparison, 
            and creating a button to navigate to your last selection.
            </p>
            </div>
            <div className = "TextBox_Child">
            <b>Creating a Lo-Fi Prototype:</b>            
            <p>
            I created a Lo-Fi prototype to incorporate these designs on Balsamiq for both the 
            desktop and mobile versions.
            </p>
            </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Lofi.png" className = "Basic_Image1"></img>
            </div>
            <div className = "TextBox_Child">
            <b>Creating a Hi-Fi Prototype:</b>
            <p>
            Then, I created the Hi-Fi prototype. I used the designs I made in the Lo-Fi to guide my
            design choices. Using Figma, I created a design guide to show the designs I used for the website.
            Then, I fleshed out the website on Figma and added comments to show how they suffice the affordances
            that makes the website intuitive. 
            </p>
            </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Design.png" className = "Basic_Image1"></img>
            </div>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Hifi.png" className = "Basic_Image3"></img>
            </div>
            <div className = "TextBox_Child">
            <b>Deploying the website:</b>
            <p>Finally, using Github pages, I deployed the webpage which you can view using the button 
              link at the top of the page.</p> 
              </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Reflection
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            I was quite satisfied with the design quality based on my trivial knowledge in 
            programming. I felt that I started to understand the design process regarding being a 
            UI developer, going through the stages of planning then execution.
            </p>
            <p>
            However, given that I did not implement all the functionality I wanted, primarily the 
            drop-down menu for colors and sizes, I believe there was alot to impreve. Moreover, I felt that some of my comments regarding 
            my Lo-Fi and Hi-Fi sketchups could have been more concise. Finally, I felt that I could have 
            added detailed design indications such as margin padding, and pixel sizes of the pictures for 
            better planning.
            </p>

          </div>
        </div>
      </div>

      <div className = "OtherProjects_Divider">
        <div className = "Other_ProjectsTitle">
          <div className = "Other_ProjectsTitle">
            <div className = "OtherProjectsTitle_Text">
            <i>You May Also Like...</i>
            </div>
          </div>
        </div>
        <div className = "Other_ProjectsComponents">
          <div className = "Other_ProjectsChild">
            {displayPortofolio.map((item)=> (
              <PortofolioBox
              item = {item}/>
            ))}
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
