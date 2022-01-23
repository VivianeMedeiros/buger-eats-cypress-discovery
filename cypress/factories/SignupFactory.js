var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
            name: `${firstName} ${lastName} `,
        cpf: cpf.generate(),
        email: faker.internet.email(firstName),
        whatsapp: '16999999999', 
        address: {
            postalcode: '14808452',
            street: 'Rua Délcio Gonçalves da Silva',
            number: '845',
            details: 'Ap. 45 bloco A',
            district: 'Jardim Imperial',
            city_state: 'Araraquara/SP'
    
        },
        delivery_method: 'Moto',
        cnh:'cnh-digital.jpg'
    }

    return data

    }


}
