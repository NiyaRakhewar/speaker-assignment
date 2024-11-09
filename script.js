document.addEventListener("DOMContentLoaded", () => {
    const speakers = [
        {
          id: 1,
          name: "John Doe",
          title: "Chief Marketing Officer",
          image:
            "https://s3-alpha-sig.figma.com/img/d6a6/fffd/2100d987b5946aa1df33cf0f6c34a418?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0ozEGQKCEzpMDFiGB0WI7e3Jy5hs~XAzkQEmXckRff9Yql3RG4oZ3qz7U-lmzlgN5l~VSp88OF3WSEHLG8hewYzujk8BfcrkQvmBJSeDEvGfDm6uDq5Hsx9cQ1cfgLQHZz10fHEBoS7H8kb73P-hWtJj2qYrDYGdR5YhEHfHT9EQehf5C90C4PZkDVQRu6FZWCVcxHr7FcTZGWaNC-LSjOSmA4KZaKs1FIk-OEuIlV9fK7KSQoo-7pSIHsF2dGTfhxvY4s8ywp-UY0qcUPSa7BHmFJKLlpd~NhfU2JEvdZGid5XK-F6O7RbD4CLUF1cc6yaUuh1WrCdQ9fM~aRMJQ__",
          bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare.Dramatically pursue real-time markets through e-business strategic theme areas.",
          company: "Spacbee",
        },
        {
          id: 2,
          name: "Jane Smith",
          title: "Chief Technical Officer",
          image:
            "https://s3-alpha-sig.figma.com/img/9de3/b8aa/4e6fd86d00bc645311899b3fbcca52d5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-2az8c~TQ4GQTgMdGGA~OiZRcxQqNliOmg1Nrh3~q5mCbkyAXoOFrZXz3rtpBmhoLH2MEPcD8uyzrysiBixOxyySVYRLqY2pdQYKhqW1Kibe4meVDaoZKzWOedglJPRuLQhW62vUhFnnDWDaxe74zfw1MfHfD-qLD4-v2FEWZy4Ww64U6DTEIPNSgwu2vhoCu0UzxocqOeUDrobUZuHnzPMc29WeTKpzHo~9NfifEoSciD~yZUa0s40o9Q~gM54g-UhG-46MlVop01DP9xSiLXP3RnQq6B3DimGuPflSgw9-5gSLX5Z94~AVOpkYwkxNCs-jiWwTnZfxmyz5X~qIw__",
          bio: "Jane, the CTO of Acme Corp, is an expert in technology innovation and leadership. She oversees the development of cutting-edge software solutions, ensuring they align with business goals. Her passion for AI and automation is transforming the way Acme Corp serves its clients.",
          company: "Acme Corp",
        },
        {
          id: 3,
          name: "Alice Johnson",
          title: "Tech Lead",
          image:
            "https://s3-alpha-sig.figma.com/img/9134/0d19/81845f21043dd8f5192da248767c4eae?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k803O02X0pXmvOoAJFVO6iTOVx5GGHL72bT8~YUINLU1Y6aGiPW2aRLhexGOSlbBUQ89XvZZIyecwmCJ5cV~hgYwOhN~oSLMER17lHrYCYNHAT2Jcn9BekVJbmj3zvnHHZVJR4KKR0tPZpDmCae~SI32EupBZK9ysXymdgpxj-WznEuPuu1xtWW3fyx7~ItSbU7hR86mpPpdqZ-Ds6PZH~4ZPPIkPip0oT7MehKrtQe-yXfJIoMZLu-bY9A02b~tUb2PtcZWKYBOElVVVcZRfkAG4MNx0B5RxvSxXsadVuMULmz3yebUvtY5qJrJy8gCIGCRpN35dN~qR3HpnuflCw__",
          bio: "Alice is the Tech Lead at Acquia, driving the development of scalable and robust software solutions. With a strong foundation in full-stack development, she leads a team that builds high-performance systems while mentoring junior developers to help them grow their skills.",
          company: "Acquia",
        },
        {
          id: 4,
          name: "Harry Johnson",
          title: "Head HR",
          image:
            "https://s3-alpha-sig.figma.com/img/aeba/3e61/75255eef4aafbeaf378e32d61894f628?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=THCVaU2hZrwyAHEhKFhbXoYU4qg1f7~FK7hrPzcA1iCzXSUKV88oyZd5eSNfxrMuuAW4CK4XbwO3NCLAk2QGzmpSTcqyvuz7honPyZsNEAklbn-Gq6x06PEkqzZWPaa2RBro6TBvLC9SUsP3S9LXnzg53jVNaJ5yg2YOBbUeLp3qzOF0zGCkKdBDFJ0EnvHqqqLmAEvMrhcxNBTbyWi2F0I7yk15nb5obNZYbGGz0Tr7z7U-tWrbHtmPC3ld7AFB~IBamtN9nQQ5GpER0agWBD0ZrbpLBfMLoCxhhIZQZeigQzKxqp9d~g8aWucIgPAZh8pDE-7IxdZjQ~CjaHDmEQ__",
          bio: "As Head of HR at Pantheon, Anna is responsible for creating a positive and inclusive work culture. She leads employee engagement initiatives, recruitment, and talent development, ensuring the company attracts and retains top talent in a rapidly changing environment.",
          company: "Pantheon",
        },
        {
          id: 5,
          name: "Jems Dyson",
          title: "Sales Head",
          image:
            "https://s3-alpha-sig.figma.com/img/9de3/b8aa/4e6fd86d00bc645311899b3fbcca52d5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-2az8c~TQ4GQTgMdGGA~OiZRcxQqNliOmg1Nrh3~q5mCbkyAXoOFrZXz3rtpBmhoLH2MEPcD8uyzrysiBixOxyySVYRLqY2pdQYKhqW1Kibe4meVDaoZKzWOedglJPRuLQhW62vUhFnnDWDaxe74zfw1MfHfD-qLD4-v2FEWZy4Ww64U6DTEIPNSgwu2vhoCu0UzxocqOeUDrobUZuHnzPMc29WeTKpzHo~9NfifEoSciD~yZUa0s40o9Q~gM54g-UhG-46MlVop01DP9xSiLXP3RnQq6B3DimGuPflSgw9-5gSLX5Z94~AVOpkYwkxNCs-jiWwTnZfxmyz5X~qIw__",
          bio: "Ketty Dyson, Sales Head at Info.Ai, drives sales strategy and business development. She leads a team of high-performing sales professionals, focusing on expanding Info.Ai’s market presence and fostering long-term relationships with clients to achieve sustainable growth.",
          company: "Info.Ai",
        },
      ];

  
    const speakerSlider = document.getElementById("speakerSlider");
    const speakerDetails = document.getElementById("speakerDetails");
    const closeDetails = document.getElementById("closeDetails");
  
    function renderSpeakerCards() {
      speakers.forEach((speaker) => {
        const card = document.createElement("div");
        card.className = "speaker-section__card";
        card.innerHTML = `
        <div class="speaker-section__card__div">
          <div >
            <img class="speaker-section__card__image" src="${speaker.image}" alt="${speaker.name}" />
          </div>
          <h2 class="speaker-section__card__name">${speaker.name}</h2>
          <div class="speaker-section__card__title_div">
            <h4>${speaker.title}</h4>
            <p>${speaker.company}</p>
          </div>
        </div>
        `;
        card.addEventListener("click", () => showSpeakerDetails(speaker));
        speakerSlider.appendChild(card);
      });
    }
  
    function showSpeakerDetails(speaker) {
      document.getElementById("detailsImg").src = speaker.image;
      document.getElementById("detailsName").textContent = speaker.name;
      document.getElementById("detailsTitle").textContent = speaker.title;
      document.getElementById("detailsCompany").textContent = speaker.company;
      document.getElementById("detailsBio").textContent = speaker.bio;
  
      speakerDetails.classList.add("speaker-details--active");
    }
  
    closeDetails.addEventListener("click", () => {
      speakerDetails.classList.remove("speaker-details--active");
    });
  
    renderSpeakerCards();
  });
  