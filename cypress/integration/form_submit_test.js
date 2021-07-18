describe('First test',function(){
   it('Generate Error',function(){
       cy.visit('http://localhost:4200')
       cy.get('a').click()

       cy.get('input[name="email"]')
       .focus()
       cy.get('input[name="name"]')
       .focus()
       cy.get('input[name="email"]')
       .focus()
     
        
   })
   it('Generate Error Email Field',function(){
       cy.visit('http://localhost:4200')
       cy.get('a').click()

       cy.get('input[name="name"]')
       .type('Test Name')
       .should('have.value','Test Name')
       
       cy.get('input[name="email"]').focus()
       cy.get('input[name="name"]').focus()
        
   })
   it('Generate Error Name Field',function(){
       cy.visit('http://localhost:4200')
       cy.get('a').click()

       cy.get('input[name="email"]')
       .type('Test@gmail.com')
       .should('have.value','Test@gmail.com')
       
       cy.get('input[name="name"]').focus()
       cy.get('input[name="email"]').focus()
        
   })
   it('Visit Home Page After Successfull Registration',function(){
       
       cy.visit('http://localhost:4200')
       cy.get('a').click()

       cy.get('input[name="name"]')
       .type('Test Name')
       .should('have.value','Test Name')
     
       cy.get('input[name="email"]')
       .type('Test@gmail.com')
       .should('have.value','Test@gmail.com')

       cy.get('input[name="email"]').blur()
       cy.wait(1000)
       cy.get('#submit').click()
        
   })
});