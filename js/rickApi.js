const widthScreen = window.innerWidth,
    $fragment = document.createDocumentFragment(),
    $h1 = document.createElement("h1"),
    $btn = document.querySelector(".btn-executer"),
    $cursorBlock = document.querySelector(".cursor"),
    $opener = document.querySelector('.start-button'),
    $btnBack = document.querySelector('.img-back'),
    $sectionToErase = document.querySelector('.background-image'),
    $gettingInfo = document.getElementById("fetch"),
    $newDiv = document.querySelector(".main-screen"),
    $paginationContainer = document.querySelector(".pagination");
    const hora = Date();
    let currentPage = 1;
    const itemsPerPage = 20;

    $opener.addEventListener("click",() => {
        $opener.classList.add("start-button-animation");
        $opener.addEventListener("animationend",()=>{
            document.body.classList.remove("bg-dark")
            document.body.classList.add("new-background")
            document.body.style.overflow= "visible";
            $sectionToErase.remove();

            async function getAllCharacters() {
                let allCharacters = [];
                let url = 'https://rickandmortyapi.com/api/character';
                while (url){
                    const response = await fetch(url);
                    const data = await response.json();
                    allCharacters = allCharacters.concat(data.results);
                    url = data.info.next; 
                }
                return allCharacters;
            }

            function displayCharacters(characters, page) {
                $cursorBlock.innerHTML = ''; 
                $fragment.innerHTML = '';
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = page * itemsPerPage;
                const charactersToDisplay = characters.slice(startIndex, endIndex);
            
                charactersToDisplay.forEach(character => {
                    const { name, status, species, image } = character;
                    const $characterContainer = document.createElement('div'),
                        $newText = document.createElement("p"),
                        $newTextSub = document.createElement("p"),
                        $characterImage = document.createElement('img');
                        $characterImage.setAttribute("src", image);
                        $characterImage.classList.add("image-card");
                        $newText.textContent = `My name is ${name}`;
                        $newTextSub.textContent = `I'm ${species} and ${status}`;
                        $newText.classList.add('rick-cards-text');
                        $newTextSub.classList.add('rick-cards-text');
                        $characterContainer.insertAdjacentElement("afterbegin", $characterImage);
                        $characterContainer.appendChild($newText);
                        $characterContainer.appendChild($newTextSub);
                        $characterContainer.classList.add("rick-cards");
                        $fragment.appendChild($characterContainer);
                    });
                $cursorBlock.classList.add("rick-cards-container");
                $cursorBlock.appendChild($fragment);
            }

            function updatePagination(characters) {
                const totalPages = Math.ceil(characters.length / itemsPerPage);
                const $btnContainer = document.createElement('div');
                for (let i = 1; i <= totalPages; i++) {
                    const $pageBtn = document.createElement('button');
                    $pageBtn.textContent = i;
                    $pageBtn.classList.add('page-btn');
                    if (i === currentPage) $pageBtn.classList.add('active');
                    
                    $pageBtn.addEventListener('click', () => {
                        currentPage = i;
                        $pageBtn.classList.toggle('active')
                        displayCharacters(characters, currentPage);
                    });
                    $btnContainer.insertAdjacentElement("beforeend",$pageBtn);
                }
                $newDiv.appendChild($btnContainer);
            }
            
            getAllCharacters().then(allCharacters => {
                displayCharacters(allCharacters, currentPage);
                updatePagination(allCharacters);
            })

            .catch(
                error=>{
                    console.log('Error: ',error)
                }
            )
            .finally(
                ()=>{
                    console.log('testeando')
                }
            )
        }, { once: true })
    });

    document.addEventListener("click",(e)=>{
        console.log(e.target);
    })
    $btnBack.addEventListener("click",()=>{
        window.history.back()
    })
    
    
    
    
    
    
    /*     
    $btn.addEventListener("click",()=>{
        try {
            console.log($newText);
        } catch (error) {
            console.log(error);
        }
    })
    
    document.addEventListener('mousemove', e => {
            $cursorBlock.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }); */