import Etch from "./Etch.js";
import UserInterface from "./UserInterface.js";

const NewEtchGame = new Etch();
const UI = new UserInterface(NewEtchGame);

UI.start();
