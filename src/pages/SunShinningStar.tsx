import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL = "https://forms.gle/Bee7Xc23wszzJ53B6";

const candidates = [
  { id: 1, name: "Ansh Rajore", image: "https://via.placeholder.com/400x400?text=Candidate+1" },
  { id: 2, name: "Aryan Banole", image: "https://via.placeholder.com/400x400?text=Candidate+2" },
  { id: 3, name: "Godwill Bida Edison", image: "https://via.placeholder.com/400x400?text=Candidate+3" },
  { id: 4, name: "Jaydeep Shinde", image: "https://via.placeholder.com/400x400?text=Candidate+4" },
  { id: 5, name: "Kartik Sharma", image: "https://via.placeholder.com/400x400?text=Candidate+5" },
  { id: 6, name: "Gayatri Bhambare", image: "https://via.placeholder.com/400x400?text=Candidate+6" },
  { id: 7, name: "Krishna Kansara", image: "https://via.placeholder.com/400x400?text=Candidate+7" },
  { id: 8, name: "Lekhya Thota", image: "https://via.placeholder.com/400x400?text=Candidate+8" },
  { id: 9, name: "Manjiri Neeta Gholap", image: "https://via.placeholder.com/400x400?text=Candidate+9" },
  { id: 10, name: "Vedika Rewale", image: "https://via.placeholder.com/400x400?text=Candidate+10" },
];

const SunShinningStar = () => {
  const handleVoteClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-background via-background to-background/90">
      <Navbar />
      <section
        id="vote-now"
        className="pt-32 pb-20 md:pt-36 md:pb-28 container mx-auto px-4 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary/80 mb-3"
            style={{ fontFamily: "Clash, CalfineDemo, Poppins, sans-serif" }}
          >
            Sandipotsav SUN Shinning Star 2k26
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 festival-text-gradient"
            style={{ fontFamily: "Gavency, Bebas Neue, sans-serif" }}
          >
            Vote for Your <span className="text-primary">SUN Shinning Star</span>
          </h1>
          <p
            className="text-sm md:text-base text-muted-foreground"
            style={{ fontFamily: "Clash, CalfineDemo, Poppins, sans-serif" }}
          >
            Explore the shortlisted candidates for both Mr SUN Shinning Star and Ms SUN Shinning
            Star and cast your vote through the official Google Form. Click on any card below to
            open the voting form.
          </p>
        </div>

        {/* Mr SUN Shinning Star Section */}
        <div className="mb-12">
          <h2
            className="text-xl md:text-2xl font-semibold mb-4 text-center"
            style={{ fontFamily: "Clash, CalfineDemo, Poppins, sans-serif" }}
          >
            Mr SUN Shinning Star (Top 5)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {candidates.slice(0, 5).map((candidate) => (
              <Card
                key={candidate.id}
                className="group cursor-pointer overflow-hidden bg-gradient-to-b from-card/80 to-background/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                onClick={handleVoteClick}
              >
                <CardHeader className="p-0">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pb-4 px-4 flex flex-col items-center text-center gap-2">
                  <CardTitle
                    className="text-lg md:text-xl font-semibold"
                    style={{ fontFamily: "Clash, CalfineDemo, Poppins, sans-serif" }}
                  >
                    {candidate.name}
                  </CardTitle>
                  <Button
                    type="button"
                    size="sm"
                    className="mt-1 rounded-full px-5"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVoteClick();
                    }}
                    style={{ fontFamily: "Clash, CalfineDemo, Poppins, sans-serif" }}
                  >
                    Vote Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ms SUN Shinning Star Section */}
        <div>
          <h2
            className="text-xl md:text-2xl font-semibold mb-4 text-center"
            style={{ fontFamily: "Clash, CalfineDemo, Poppins, sans-serif" }}
          >
            Ms SUN Shinning Star (Top 5)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {candidates.slice(5).map((candidate) => (
              <Card
                key={candidate.id}
                className="group cursor-pointer overflow-hidden bg-gradient-to-b from-card/80 to-background/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                onClick={handleVoteClick}
              >
                <CardHeader className="p-0">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pb-4 px-4 flex flex-col items-center text-center gap-2">
                  <CardTitle
                    className="text-lg md:text-xl font-semibold"
                    style={{ fontFamily: "Clash, CalfineDemo, Poppins, sans-serif" }}
                  >
                    {candidate.name}
                  </CardTitle>
                  <Button
                    type="button"
                    size="sm"
                    className="mt-1 rounded-full px-5"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVoteClick();
                    }}
                    style={{ fontFamily: "Clash, CalfineDemo, Poppins, sans-serif" }}
                  >
                    Vote Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SunShinningStar;


