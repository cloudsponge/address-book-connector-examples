// import the address-book-connector object from the package
import addressBookConnector from '@cloudsponge/address-book-connector.js';

addressBookConnector.setOptions({
    key: "Tx1Xd0brCZfPSw32dt7kzA",
    success: function() {
        console.log('success!');
    },
    failure: function(error) {
        console.log('success NOT!', error);
    }
});
