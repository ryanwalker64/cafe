import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";


const contentContainer = document.getElementById('content');
const tabCont = document.createElement('div');


const navArr = [
    'Home',
    'Menu',
    'Contact'
]

function Navbar() {

    let navContainer = document.createElement('UL'); 

    navArr.forEach(navItem => {
        let navDomItem = document.createElement('LI');
        navDomItem.textContent = navItem;
        navDomItem.classList.add('nav--link');
        navDomItem.setAttribute('data-nav', navItem)

        navDomItem.addEventListener('click', (e) => {

            // console.log(e.target.dataset['nav']);
            handleTabSwitch(e.target.dataset['nav']);
        })
        navContainer.append(navDomItem);
    })

    return navContainer;
    

}

contentContainer.append(Navbar());
contentContainer.append(tabCont);

function handleTabSwitch(tab = Home) {
    const selectedTab = tab === 'Menu' 
                        ? Menu() 
                        : tab === 'Contact'
                            ? Contact()
                            :  Home() 
    tabCont.innerHTML = selectedTab;
} 

handleTabSwitch();






// create menu page
// create contact page
// style it