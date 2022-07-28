
const payment_data = {
    transaction_amount: 1,
    description: 'Título do produto',
    payment_method_id: 'pix',
    payer: {
        email: "test@test.com",
        first_name: "Test",
        last_name: "User",
        identification: {
            type: "CPF",
            number: "19119119100"
        }
    },
    // notification_url:"https://webhook.site/f1e750ff-0854-4b74-8ef3-99456f4f67ca",
    external_reference:"123456789"
}


module.exports = payment_data

