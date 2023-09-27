// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
}

function pAequorFactory(num, arr) {
    return ({
        specimenNum: num,
        dna: arr,
        mutate() {
            const randDnaIndex = Math.floor(Math.random() * this.dna.length);
            let newDnaBase = returnRandBase();
            while (newDnaBase === this.dna[randDnaIndex]) {
                newDnaBase = returnRandBase();
            }
            this.dna[randDnaIndex] = newDnaBase;
            return this.dna;
        },
        compareDNA(pAequor) {
            let matches = 0;
            for (let i = 0; i < pAequor.dna.length; i++) {
                if (pAequor.dna[i] == this.dna[i]) {
                    matches++;
                }
            }
            const percentage = Math.floor(matches * 100 / pAequor.dna.length);
            console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`);
        },
        willLikelySurvive() {
            let goodBases = 0;
            this.dna.forEach(base => {
                if (base === "C" || base === "G") {
                    goodBases++;
                }
            })
            const percentage = goodBases * 100 / this.dna.length;
            return percentage >= 60;
        }
    })
}

let storedPAequor = [];

for (i = 1; i <= 30; i++) {
    storedPAequor.push(pAequorFactory(i, mockUpStrand()));
}
