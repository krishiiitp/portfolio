/* ============================typing animation ============================== */
var typedInstance; // Variable to hold the current Typed instance

function initializeTypingAnimation() {
    // Destroy the existing Typed instance if it exists
    if (typedInstance) {
        typedInstance.destroy();
    }

    // Create a new Typed instance
    typedInstance = new Typed(".typing", {
        strings: ["Krish Thakrar"],
        typeSpeed: 100,
        //backSpeed: 60,
        //loop: true,
        onComplete: function(self) {
            self.cursor.remove(); // Remove the cursor element
        }
    });
}

// Call this function initially to start the typing animation
initializeTypingAnimation();


var typed = new Typed(".typing-skills",{
    strings: ["Web Developer","API Developer","Database Designer","App Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* ============================ Aside ============================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length
    for(let i=0; i<totalNavList;i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBackSection();
            for(let j=0;j<totalNavList;j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")    
            showSection(this);
            if (window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();    
            }
            initializeTypingAnimation();
        });
    }
    function removeBackSection() 
    {
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("back-section");
        }    
    }
    function addBackSection(num) 
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element) 
    {
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }
    function updateNav(element)
    {
        for(let i=0;i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index")
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",() => 
        {
            asideSectionTogglerBtn();  
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");    
            for (let i = 0; i < totalSection; i++) 
            {
                allSection[i].classList.toggle("open");
            }
        }
        document.getElementById('downloadButton').addEventListener('click', function() {
            var link = document.createElement('a');
            link.href = 'https://github.com/krishiiitp/portfolio/raw/master/Krish_Thakrar_Resume.pdf'; // Path to your file
            link.download = 'Krish_Thakrar_Resume.pdf'; // Desired file name
            link.target = '_blank'
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission
                var name = document.getElementById('name').value;
                var email = document.getElementById('email').value;
                var message = document.getElementById('message').value;
                var subject = document.getElementById('subject').value;
                var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
                var gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=krishthakrar018@gmail.com&su=' + subject + '&body=' + body;
                window.open(gmailLink, '_blank');
                // Clear the form fields
                this.reset();
            });
        });
        