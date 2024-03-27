const mongoose = require("mongoose");
const Base = require("./model/card");

mongoose.connect("mongodb://localhost:3010/");
var db = mongoose.connection;

async function iniBase () {
    const base = await new Base({
        themeArray: [{
            name: 'PPC',
            cardArray: [
                {
                    question: 'Which part of the operating system decides which process will run next?',
                    response: 'The scheduler'
                },
                {
                    question: 'On a dual-core system, how many processes can run on a single processing core at the same time?',
                    response: '1'
                },
                {
                    question: 'Is it the process or the thread that is prone to race conditions?',
                    response: 'thread'
                },
                {
                    question: 'Is an independently running application instance a process or a thread?',
                    response: 'process'
                },
                {
                    question: 'In multi-threaded programming, when two or more threads need to access the same resource, what mechanism is usually used to avoid conflicts and ensure data consistency?',
                    response: 'mutex'
                }
            ]
        },
        {
            name: 'NAS',
            cardArray: [
                {
                    question: 'What is the full name of PE in networking context?', 
                    response: 'Provider Edge'
                },
                {
                    question: 'Is it necessary to configure VPN on a CE router?', 
                    response: 'No'
                },
                {
                    question: 'Is it true that MP-BGP can use ipv6?', 
                    response: 'Yes'
                },
                {
                    question: 'In routing, what do we call the specific value that identifies a segment?', 
                    response: 'SID'
                },
                {
                    question: 'In Segment Routing, what are the two basic operational states that guide the forwarding of packets?', 
                    response: 'Continue, Next'
                }
            ]
        },
        {
            name: 'DCO',
            cardArray: [
                {
                    question: 'What are the two Nyquist criteria?', 
                    response: "The sampling frequency must be at least twice the maximum frequency present in the signal. The modulation rate is less than twice the bandwidth of the signal."                    
                },
                {
                    question: "What is the expression for Shannon's capacity?", 
                    response: 'Rbmax=B log(1+S/N)'
                },
                {
                    question: 'What is the expression for spectral efficiency, and what is its unit?', 
                    response: 'Spectral efficiency = D/B (bit/s/Hz)'
                },
                {
                    question: 'Give the definition of modulation rate.', 
                    response: 'The modulation rate or symbol rate is the rate at which symbols are transmitted: Rs=1/Ts in Baud (Bd)'
                },
                {
                    question: 'Give the expression for the bit rate.', 
                    response: 'Rb= n/Ts (b/s) where n is the number of bits per symbol'
                }
            ]
        },
        {
            name: 'MAS',
            cardArray: [
                {
                    question: 'What is the dot product?', 
                    response: "It's a function f: E×E→R on vector space E that is commutative, distributive over vector addition, compatible with scalar multiplication, and positive definite."
                },
                {
                    question: 'What is the definition of norm??', 
                    response: "The norm is the square root of the dot product of a vector with itself, representing the vector's magnitude."
                },
                {
                    question: "How is Parseval's theorem interpreted?", 
                    response: 'Energy conservation between domains, dot product remains the same under basis change.'
                },
                {
                    question: 'What is the analysis formula in the context of function decomposition?', 
                    response: "It's the linear combination of elementary functions through their dot products with the function."
                },
                {
                    question: 'In Segment Routing, what are the two basic operational states that guide the forwarding of packets?', 
                    response: 'Continue, Next'
                }
            ]
        }]

    });
    await base.save();
}

iniBase();
console.log("done");