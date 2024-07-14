class Homepage{

    getFullName(){
        return cy.get(':nth-child(2) > .greet > .logged-in')
    }

    getHomePageContentInfo(){
        return cy.get('.home-main > .content > .info')
    }

    getHomePageContentTitle(){
        return cy.get('.home-main > .content > .title')
    }

    getShowNewYogaButton(){
        return cy.get("span[class='action more button']")
    }

}
export default Homepage;