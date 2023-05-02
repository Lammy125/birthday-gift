import Header from "./Header";
import "./About.scss";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <h2>My Angel</h2>
        <p>
          I wanted to take a moment to tell you how much you mean to me. From
          the moment I met you, I knew there was something special about you.
          Your kind heart, infectious laugh, and beautiful smile drew me to you
          like a magnet. And as I got to know you better, I discovered so many
          wonderful things about you that make me love you even more. I admire
          your strength, resilience, and determination. You have faced
          challenges head-on and come out even stronger on the other side. You
          inspire me to be a better person every day, and I feel so lucky to
          have you in my life. The moments we have shared together have been
          some of the happiest of my life. Every moment with you is special and
          cherished. I love the way we can talk for hours about anything and
          everything, and the way we can also sit in comfortable silence
          together. You bring so much joy and positivity into my life, and I am
          forever grateful for you. I promise to always support and encourage
          you, to be your rock when you need it, and to love you with all my
          heart. Thank you for being my partner, my best friend, and the love of
          my life. With all my love.
        </p>
        <h2 className="myName">Peter</h2>
      </div>
    </div>
  );
};

export default About;
