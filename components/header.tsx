export default function Header() {
    return (
        <header id="header" className="fixed top-0 w-full bg-white p-4 shadow-md flex justify-center gap-4 text-black">
            <a href="#home">Home</a> | 
            <a href="#about">About</a> | 
            <a href="#portfolio">Portfolio</a> | 
            <a href="#resume">Resume</a> | 
            <a href="#contact">Contact</a>
        </header>
    );
}
