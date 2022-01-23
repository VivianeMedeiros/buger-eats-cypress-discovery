import SignupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'



 describe('Signup', ()=> {

        //  beforeEach( function () {

        //     cy.fixture('deliver').then((d)=> {
        //         this.deliver = d
        //     })
      //   })
      

//     before(function() {
//         cy.log('Tudo aqui é executado ema unica vez ANTES de todos os casos de testes')
//     })

//     beforeEach(function() {
//         cy.log('Tudo aqui é executado sempre ANTES de cada caso de testes')

//     })

//     after(function() {
//         cy.log('Tudo aqui é executado ema unica vez DEPOIS de todos os casos de testes')
//     }) 

//     afterEach(function() {
//         cy.log('Tudo aqui é executado sempre DEPOIS de cada caso de testes')

//     })
  


// cenário para Usuário deve se tornar um entregador

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        SignupPage.modalContentShoulBe(expectedMessage)


    })

    // cenário para CPF incorreto
    it('Incorrect document', function() {  
        
        var deliver = signupFactory.deliver()

        deliver.cpf = '0778048AAAA'

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()
        SignupPage.alertMessageShouldBe('Oops! CPF inválido')
        

    })

    // cenário para email incorreto

    it('Incorrect email', function() {    

        var deliver = signupFactory.deliver()
        deliver.email = 'vivi.com.br'


        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()
        SignupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
        

    })
// teste de campos obrigatórios, e passando a mensagem com o email diferente do esperado

    context('Required fields', function() {

        const messages =[
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}

        ]

        before(function () {
            SignupPage.go()
            SignupPage.submit()

        })

        messages.forEach(function(msg) {
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })


        })


    })

// outra forma de validar campos obrigatórios, desta forma, caso algum treste falhe, não executa os demais. Por exemplo, se alterar o valor esperado do campo Email. os testes abaixo dele todos falham.
    // it('Required fields', function() {    

    //     SignupPage.go()
    //     SignupPage.submit()
    //     SignupPage.alertMessageShouldBe('É necessário informar o nome')
    //     SignupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     SignupPage.alertMessageShouldBe('É necessário informar o email')
    //     SignupPage.alertMessageShouldBe('É necessário informar o CEP')
    //     SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     SignupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')

        
    // })



})