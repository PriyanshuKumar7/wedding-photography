/* Feature: Story & Team Page */
import SectionTitle from '../components/common/SectionTitle';
import PhotographerStory from '../components/about/PhotographerStory';
import TeamCard from '../components/about/TeamCard';

const About = () => {
  // TODO: BACKEND CONNECT - Team data from backend
  const team = [
    { 
      name: "Priyanshu", 
      role: "Lead Photographer", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" 
    },
    { 
      name: "Rani", 
      role: "Cinematographer", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" 
    },
    { 
      name: "Ritik", 
      role: "Editor", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" 
    },
  ];

  return (
    <div className="
      pt-24 sm:pt-28 md:pt-32 
      pb-16 sm:pb-20 md:pb-24 
      min-h-screen 
      bg-lux-dark
    ">
      <div className="
        container mx-auto 
        px-4 sm:px-6 lg:px-8 
        max-w-5xl
      ">
        <PhotographerStory />
        
        <div className="mt-16 sm:mt-20 md:mt-24">
          <SectionTitle title="Meet The Team" />
          
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 sm:gap-7 lg:gap-8
            mt-8 sm:mt-10
          ">
            {team.map((t, i) => (
              <TeamCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;