const seedPosts = [
  {
    id: 0,
    title: "The Art of Minimalist Design in Digital Products",
    subHead: "Explore how less can truly be more when crafting user experiences that resonate with modern audiences.",
    author: "Sarah Chen",
    authorImg: "images/authors/Sarah Chen.jpg",
    featured: true,
    tags: [],
    readTime: "5 min read",
    postDate: "Dec 15, 2024",
    banner: "images/articles/Canva Art of Minimalist Design.png",
    content: `<div class="p-4 md:p-6 lg:p-8 ">
                                <!-- intro -->
                                <p class="text-secondary mb-4 leading-relaxed">In an era where users are overwhelmed by endless apps, notifications, and choices, simplicity has become a competitive advantage. Minimalist design isn’t about stripping away features just for aesthetics — it’s about reducing friction so users can achieve their goals effortlessly.</p>
                                <p class="text-secondary mb-4 leading-relaxed">A clean interface guides attention, reduces cognitive load, and makes products feel trustworthy. Think of Google’s homepage: a logo, a search bar, and nothing else. Its minimalism is what made it iconic.</p>

                                <!-- main text -->
                                <h2 class="text-xl font-semibold text-primary mb-3">Principles of Minimalist Digital Design</h2>
                                <div class="">
                                    <p class="text-secondary mb-2 leading-relaxed"><strong class="ml-4 text-secondary">1. Clarity over clutter</strong> — Every element should serve a purpose. If it doesn’t help the user complete a task or understand the interface, it’s noise.</p>
                                    <p class="text-secondary mb-2 leading-relaxed"><strong class="ml-4 text-secondary">2. Whitespace as a design tool</strong> — Space isn’t empty — it creates breathing room, improves readability, and emphasizes what really matters.</p>
                                    <p class="text-secondary mb-2 leading-relaxed"><strong class="ml-4 text-secondary">3. Typography as hierarchy</strong> — Minimalist design relies on strong typography to communicate structure and tone without extra decoration.</p>
                                    <p class="text-secondary mb-2 leading-relaxed"><strong class="ml-4 text-secondary">4. Limited color palette</strong> — A few intentional colors are more effective than a rainbow of options. Colors can guide actions (like CTAs) and reinforce brand identity.</p>
                                    <p class="text-secondary mb-2 leading-relaxed"><strong class="ml-4 text-secondary">5. Content first</strong> — In digital products, users come for content or functionality. The design should enhance, not compete with, that core experience.</p>
                                </div>

                                <h2 class="text-xl font-semibold text-primary mb-3">Benefits for Users and Businesses</h2> 
                                <div class="">
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed">Better performance → Fewer elements often mean lighter, faster apps.</li>
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed">Accessibility → Simplified layouts make it easier to design with inclusivity in mind.</li>
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed">Stronger brand perception → Minimalism communicates focus and confidence.</li>
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed ">Faster decision-making → Clear interfaces reduce confusion.</li>
                                </div>

                                <h2 class="text-xl font-semibold text-primary mb-3">Common Pitfalls to Avoid</h2>
                                <div class="">
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed">Confusing minimalism with emptiness — Removing too much can leave users lost. Balance is key.</li>
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed">Over-reliance on icons — Icons without labels can create guesswork. Always test for clarity.</li>
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed">Ignoring context — What feels “minimal” in one culture or platform might feel incomplete in another.</li>
                                </div>

                                <h2 class="text-xl font-semibold text-primary mb-3">Examples in Action</h2>
                                <div class="">
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed">Apple → Clean interfaces, consistent grids, focus on content.</li>
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed">Airbnb → White space, typography, and imagery working together to create trust.</li>
                                    <li class="text-secondary mb-2 ml-6 leading-relaxed">Notion → A tool built around simplicity, but flexible enough to expand as users need more.</li>
                                </div>

                                <!-- finishing -->
                                <h2 class="text-xl font-semibold text-white mb-3">Final Thoughts</h2>
                                <div class="">
                                    <p class="text-secondary mb-4 leading-relaxed">Minimalist design is not about doing less work — it’s about making smarter decisions. By removing distractions and focusing on clarity, digital products become more intuitive, engaging, and timeless.</p>
                                    <p class="text-secondary mb-4 leading-relaxed">In the end, minimalism isn’t a trend — it’s a discipline. And when applied thoughtfully, it creates experiences that resonate deeply with modern audiences.</p>
                                </div>
                            </div>

                            <!-- actions butons -->
                            <div class="flex gap-3 mb-6">
                                <div class="mx-auto flex gap-5">
                                    <button title="Like" class="card-hover text-muted hover:text-secondary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                                        </svg>
                                    </button>
                                    <button title="Comment" class="card-hover text-muted hover:text-secondary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                                    </button>
                                    <button title="Share" class="card-hover text-muted hover:text-secondary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z"/></svg>
                                    </button>
                                </div>
                            </div>`,
    likeCount: 0,
    comments: [
        {
            id: 0, //use date.now() hash
            author: "",
            content: "",
            upvote: 0
        },
        {
            id: 1, //use date.now() hash
            author: "",
            content: "",
            upvote: 0
        }
        // and so on 
    ],
    shareCount: 0
  },
  // and so on 
]

export default seedPosts;