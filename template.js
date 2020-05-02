let template= `
<html>
  <head>
    <title>Professional Resume</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.3.0/paper.css">
    <script src="lib/codemirror.js"></script>
    <link rel="stylesheet" href="lib/codemirror.css">
    <script src="mode/javascript/javascript.js"></script>
    <style>
      html {
        background-color: black;
      }
      body {
        background-color: #ECEFF1;
        font-family: 'Lato', sans-serif;
        width: 210mm;
        height: 297mm;
      }
      #section-left {
        width: 35%;
        float: left;
        height: 100%;
        background-color: #303030;
        color: #fff;
        text-align: center;
      }
      #section-left .section {
        margin-top: 10px;
        padding: 1em;
      }
      #section-left .section .logo {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        margin: 0 auto;
      }
      .intro hr {
        width: 4em;
        display: block;
        height: 2px;
        border: 0px;
        border-top: 2px solid;
        margin-top: 15px;
      }
      .intro .content {
        margin-bottom: 20px;
      }
      #section-left .title {
        font-size: 16px;
      }
      #section-left .subtitle {
        font-weight: lighter;
        font-size: 14px;
      }
      #contact {
        margin-top: 20px;
        font-size: 12px;
        text-align: left;
      }
      #contact div {
        padding-bottom: 6px;
      }
      #section-right {
        width: 65%;
        float: right;
      }
      #section-right .section {
        margin: 0 0 1em 0;
        padding: 12px;
        background-color: #fff;
        font-size: 14px;
        box-shadow: 1px 1px 2px #AAA;
        border-radius: 5px;
      }
      .wrapper {
        padding: 1em;
      }
      .fa {
        margin-right: 15px;
      }
      .wrapper .title {
        color: #fc7a70;
        font-size: 1.3em;
        letter-spacing: 0.1em;
        font-weight: bold;
        border-bottom: 2px solid #f2f2f2;
      }
      a:link {
        color: #fff;
        text-decoration: none;
      }
      a:visited {
        color: #fff;
        text-decoration: none;
      }
      a:hover {
        color: #fff;
        text-decoration: none;
      }
      a:active {
        color: #fff;
        text-decoration: none;
      }
      h2 {
        font-size: 1em;
        margin-bottom: 5px;
      }
      h3 {
        font-size: 0.8em;
        font-weight: bold;
        margin-top: 0px;
        margin-bottom: -5px;
      }

      .profile-pic{
        border-radius: 250px;
        max-height: 150px;
      }

      #programming .title {
        font-size: 22px;
        color: #fc7a70;
      }
      #programming {
        text-align: left;
        font-size: 13px
      }

      #myProgress {
        width: 100%;
        height: 60%;
        margin: auto;
        background-color: grey;
      }

      #myBarFR {
        width: 100%;
        height: 100%;
        background-color: #fc7a70;
      }
      #myBarEN {
        width: 95%;
        height: 100%;
        background-color: #fc7a70;
      }
      #myBarSE {
        width: 70%;
        height: 100%;
        background-color: #fc7a70;
      }
      #myBarIT {
        width: 50%;
        height: 100%;
        background-color: #fc7a70;
      }
      #myBarDE {
        width: 30%;
        height: 100%;
        background-color: #fc7a70;
      }
      .language-secion {
        display: grid;
        grid-template-columns: 65px 50px 1fr;
        grid-column-gap: 12px;
        width: 100%;
        margin-top: 20px
        }

    .language-secion  p {
        height: 1em;
        margin: auto;
        font-size: 13px
      }
      .content-text {
        display: inline-block;
        width: 87%;
        font-size: 13px;
      }
      .content-image-container {
        display: inline-block;
        margin-top: 1em;
        vertical-align: top;
        width: 12%;
      }
      .content-image {
        vertical-align: top;
        max-width: 100%;
        max-height: 35px;
      }
      ul {
        padding-left: 1em;
      }
      li {
        padding-bottom: 5px;
      }
    </style>
    <script type="text/javascript">
    var myCodeMirror = CodeMirror(document.body, {
  value: "function myScript(){return 100;}\n",
  mode:  "javascript"
  });

    </script>
  </head>

  <body class="A4">
    <div id="section-left">
      <div class="section intro">
        <img class="profile-pic" src="https://media.licdn.com/dms/image/C5603AQHIusrLoBMCZw/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=cK9HvN6mV8XOeq2UOjSS3Lur9_hVymp_LaXfgAEugvs" alt="ProfilePic">

        <h1>Paul Bricout</h1>
        <div class="content">
          <span class="title">Fullstack Javascript Developer</span> <br>
          <span class="subtitle">ReactJS/React Native/NodeJS</span>
        </div>
        <hr>
        <div id="contact">
          <div class="phone">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span class="num">+33 6 78 71 68 14</span>
          </div>
          <div class="email">
            <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
            <a href="mailto:paulbricout2@gmail.com">paulbricout2@gmail.com</a>
          </div>
          <div class="web">
            <i class="fa fa-link" aria-hidden="true"></i>
            <a href="https://brumor.github.io/portfolio/">https://brumor.github.io/portfolio/</a>
          </div>
          <div class="linkedin">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <a href="https://www.linkedin.com/in/paul-bricout-428974104/">Paul Bricout</a>
          </div>
        </div>
        <hr>
        <div id="programming">
          <div class="title">
            <i class="fa fa-terminal" aria-hidden="true"></i>
            <span class="num">Programming</span>
          </div>
          <p>
            <span class="programming-section">Mobile Development:</span>
            <ul>
              <li>React Native</li>
              <li>Android Native: Java, SQLite</li>
            </ul>
            <span class="programming-section">Web Development:</span>
            <ul>
              <li>Front-end: React.js, HTML, CSS, SASS, Javascript, Material Design, PUG Template, Bootstrap</li>
              <li>Back-end: NodeJS, Flask (Python)</li>
            </ul>
            <span class="programming-section">Other: Git/Github, Firebase, MySQL, PostgreSQL</span>
          </p>
        </div>
        <hr>
        <div id="programming">
          <div class="title">
            <i class="fa fa-language" aria-hidden="true"></i>
            <span class="num">Languages</span>
          </div>
          <div class="language-secion">
            <p>French</p>
            <div id="myProgress">
              <div id="myBarFR"></div>
            </div>
            <p>Native</p>
          </div>
          <div class="language-secion">
            <p>English</p>
            <div id="myProgress">
              <div id="myBarEN"></div>
            </div>
            <p>C1</p>
          </div>
          <div class="language-secion">
            <p>Swedish</p>
            <div id="myProgress">
              <div id="myBarSE"></div>
            </div>
            <p>B2</p>
          </div>
          <div class="language-secion">
            <p>Italian</p>
            <div id="myProgress">
              <div id="myBarIT"></div>
            </div>
            <p>B1</p>
          </div>
          <div class="language-secion">
            <p>German</p>
            <div id="myProgress">
              <div id="myBarDE"></div>
            </div>
            <p>A2</p>
          </div>
        </div>
        <hr>
        <div id="programming">
          <div class="title">
            <i class="fa fa-certificate" aria-hidden="true"></i>
            <span class="num">Certificates</span>
          </div>
          <ul>
            <li>TOEFL: 985</li>
            <li>TOEIC: 101</li>
            <li>Machine Learning - Coursera</li>
            <li>React Native and Redux - Udemy</li>
          </ul>
        </div>
      </div>
    </div>

    <div id="section-right">
      <div class="wrapper">
        <div class="section">
          <div class="title">
            <i class="fa fa-user" aria-hidden="true"></i>
            Profile
          </div>
          <p>
            Business graduate and self-taught developer with experience in both the programming and the management field.<br>
            I am passionate about new technologies, social media and the digital world.<br>
            I have work-experience abroad, I speak 5 languages, and I am able to easily adapt to new cultures.<br>
          </p>
        </div>

        <div class="section">
          <div class="title">
            <i class="fa fa-briefcase" aria-hidden="true"></i>
            Experience
          </div>
          <div class="content">
            <div class="content-image-container">
              <img  class="content-image" src="https://habrastorage.org/getpro/moikrug/uploads/company/100/005/778/0/logo/medium_0d888f044bf1b566236e95590ca1b033.png" alt="">
            </div>
            <div class="content-text">
              <h2>Software Developer Intern (Omnichannel)</h2>
              <h3>Factorymarket | January 2019 - June 2019 | Berlin, GermanY</h3>
              <ul>
                <li>Fullstack Web Development: React.js, NodeJS, ExpressJS, JQuery</li>
                <li>Mobile Development: React Native</li>
                <li>Data Science: MySQL, PostgreSQL, Redash, Google Script, Google Data Studio</li>
                <li>Other: Project Documentation, CI/CD Pipeline (Gitlab), Diverse deployment method (Kubernetes, App Engine...)</li>
              </ul>
            </div>
          </div>

          <div class="content">
            <div class="content-image-container">
              <img  class="content-image" src="https://cdn.onlinewebfonts.com/svg/img_242128.png" alt="">

            </div>
            <div  class="content-text">
              <h2>Founder and Developer</h2>
              <h3>Localears | June 2018 - November 2018 | Lyon, France</h3>
              <p>Streaming Platform to help Musician get visibility in their region.</p>
              <ul>
                <li>Designing and Developing an app in React Native and a website in Node JS</li>
                <li>Writing a Business Plan with a market and finance study</li>
              </ul>
            </div>
          </div>
          <div class="content">
            <div class="content-image-container">
              <img  class="content-image" src="https://cdn.onlinewebfonts.com/svg/img_242128.png" alt="">

            </div>
            <div  class="content-text">
              <h2>Android Developer</h2>
              <h3>Kargo | June 2017 - September 2017 | Lyon, France</h3>
              <p> Developing a Mobile App for package delivery in Java for Android.</p>
            </div>
          </div>
          <div class="content">
            <div class="content-image-container">
              <img  class="content-image" src="https://graduatefog.co.uk/wp-content/uploads/2014/03/Oxfam-150x150.jpg" alt="">

            </div>
            <div  class="content-text">
              <h2>Assistant Finance Manager</h2>
              <h3>Oxfam | January 2017 - April 2017 | Newcastle Upon Tyne, United Kindom</h3>
              <p>Income team: Database management, Checking Oxfam shops' accounting documents , Entering banking operations, Training the new volunteers, Claiming back VAT, Archiving files.</p>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="title">
            <i class="fa fa-book" aria-hidden="true"></i>
            Education
          </div>
          <div class="content">
            <div class="content-image-container">
              <img  class="content-image" src="https://www.underconsideration.com/brandnew/archives/linkopings_universitet_logo_detail_blue.png" alt="">

            </div>
            <div  class="content-text">
              <h2>Linköping Universitet</h2>
              <h3>Exchange Semester | January 2018 - June 2018 | Linköping, Sweden</h3>
              <p>Management Program: Project Management, Management Control,lnternational Management, Enterprise System and Swedish B1:2</p>
            </div>
          </div>

          <div class="content">
            <div class="content-image-container">
              <img  class="content-image" src="http://intranet.inseec.com/images/inseec-bs-logo-carre.png?t=1561829157" alt="">
            </div>
            <div  class="content-text">
              <h2>BBA INSEEC Lyon</h2>
              <h3>Bachelor in Business Administration | September 2015 - June 2019 | Lyon, France</h3>
              <p>Innovation and entrepreneurship specialty: Project Management, Change Management, Digital Marketing, Company Strategy, English, German, Russian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <script src="/ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
  <script>
      var editor = ace.edit("editor");
      editor.setTheme("ace/theme/monokai");
      editor.session.setMode("ace/mode/javascript");
  </script>
  </body>
</html>
`
