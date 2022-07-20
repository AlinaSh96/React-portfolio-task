import sofa from '../image/sofa.png';
import abstract from '../image/abstract.png';
import architect from '../image/architect.png';
import calc from '../image/calc.png';
import done from '../image/done.png';
import keyboard from '../image/keyboard.png';
import sport from '../image/sport.png';
import workmedia from '../image/workmedia.png';
import hand from '../image/hand.png';


export const categories = [
    {
        id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb8",
        category: "Common",
        elements: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
          ],
        img:"",
    },
    {
        id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2001",
        category: "Design",
        elements: [
            "100",
            "500",
            "800",
          ],
        img:"abstract.png",
    },
    {
        id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2002",
        category: "Branding",
        elements: [
            "200",
            "600",
            "900",
          ],
        img:"./img/abstract.png",
    },
    {
        id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2003",
        category: "Illustration",
        elements: [
            "300",
          ],
        img:"",
    },
    {
        id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2004",
        category: "Motion",
        elements: [
            "400",
            "700",
          ],
        img:"",
    },
]



export const data = [
    {
        id: "100",
        name: "SOFA",
        category: "Motion",
        img: sofa,
        isSelected: 'false',
    },
    {
        id: "200",
        name: "KeyBoard",
        category: "Motion",
        img: keyboard,
        isSelected: 'false',
    },
    {
        id: "300",
        name: "Work Media",
        category: "Motion",
        img: workmedia,
        isSelected: 'false',
    },
    {
        id: "400",
        name: "DDDone",
        category: "Branding",
        img: done,
        isSelected: 'false',
    },
    {
        id: "500",
        name: "Abstract",
        category: "Branding",
        img: abstract,
        isSelected: 'false',
    },
    {
        id: "600",
        name: "HandP",
        category: "Design",
        img: hand,
        isSelected: 'false',
    },
    {
        id: "700",
        name: "Architect",
        category: "Design",
        img: architect,
        isSelected: 'false',
    },
    {
        id: "800",
        name: "CalC",
        category: "Illustration",
        img: calc,
        isSelected: 'false',
    },
    {
        id: "900",
        name: "Sport",
        category: "Illustration",
        img: sport,
        isSelected: 'false',
    },
]