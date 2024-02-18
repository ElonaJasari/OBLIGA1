const register = [];

function visRegister() {
    let ut = "<table><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnummer</th>" +
        "<th>Epost</th>" + "</tr>";

    for (let liste of register) {
        ut += "<tr>";
        ut += "<td>" + liste.film + "</td> <td>" + liste.antall + "</td><td>" + liste.fornavn + "</td>" +
            "<td>" + liste.etternavn + "</td><td>" + liste.telefonnr + "</td><td>" + liste.epost + "</td>";
        ut += "</tr>";
    }
    $("#register").html(ut);
}

function registrer() {
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const epost = $("#epost").val();
    function validerEpost(epost){
        const regexp =/([a-å\d.-]+)$/;
        return regexp.test(epost);
    }
    function validerTelefonNr(telefonnr){
        const regexp =/^\d{8}$/;
        return regexp.test(telefonnr);
    }

    // sjekker om noen av boksene er tomme
    if (film === '' || antall === '' || fornavn === '' || etternavn === '' || telefonnr === '' || epost === '') {
        if (film === '') {
            $("#film").after("Velg film");
        }
        if (antall === '') {
            $("#antall").after("Fyll inn antall");
        }
        if (fornavn === '') {
            $("#fornavn").after("Fyll inn fornavn");
        }
        if (etternavn === '') {
            $("#etternavn").after("Fyll inn etternavn");
        }
        if (telefonnr === '') {
            $("#telefonnr").after("Fyll inn telefonnr");
        }
        if (epost === '') {
            $("#epost").after("Fyll inn epost");
        }
    } else {
        if (!validerEpost(epost)) {
            $("#epost").after("Ugyldig epostadresse");
            return;
        }

        if (!validerTelefonNr(telefonnr)) {
            $("#telefonnr").after("Ugyldig telefonnummer");
            return;
        }

        const person = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        }

        register.push(person);
        $('input').val('');
        visRegister();
    }
}

function slettBilletterKnapp() {
    register.length = 0;
    visRegister();
}
