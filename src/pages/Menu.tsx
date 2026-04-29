import { motion } from 'motion/react';

export default function Menu() {
  return (
    <div className="bg-brand-base min-h-screen pt-32 pb-24">
       <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Food & Pairing</h1>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              Wood-fired, smoke-infused, and crafted specifically to elevate our beer. Global recipes with local soul.
            </p>
          </div>

          <div className="space-y-20">
            {/* Section 1 */}
            <section>
              <h2 className="text-3xl font-serif text-brand-accent text-center mb-10 pb-4 border-b border-white/10 uppercase tracking-widest">Shareables</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                 {[
                   { name: "Truffle Parmesan Fries", desc: "Hand-cut potatoes, white truffle oil, aged parmesan, roasted garlic aioli.", price: "₹395", pairing: "Pairs with: The Golden Anvil" },
                   { name: "Smoked Brisket Sliders", desc: "12-hour hickory smoked brisket, house stout BBQ sauce, brioche buns.", price: "₹545", pairing: "Pairs with: Midnight Ash" },
                   { name: "Charred Edamame", desc: "Wok-tossed with sea salt, chili oil, and sesame.", price: "₹325", pairing: "Pairs with: Citrus Horizon" },
                   { name: "Bangalore Gunpowder Wings", desc: "Crispy wings tossed in spicy authentic gunpowder, served with cooling mint dip.", price: "₹495", pairing: "Pairs with: Crimson Tide" },
                 ].map((item, i) => (
                   <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} key={i}>
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">{item.name}</h3>
                        <span className="text-brand-accent font-serif">{item.price}</span>
                      </div>
                      <p className="text-brand-muted text-sm mb-2">{item.desc}</p>
                      <p className="text-xs text-brand-text/50 uppercase tracking-widest italic">{item.pairing}</p>
                   </motion.div>
                 ))}
              </div>
            </section>

             {/* Section 2 */}
            <section>
              <h2 className="text-3xl font-serif text-brand-accent text-center mb-10 pb-4 border-b border-white/10 uppercase tracking-widest">Wood-Fired Pizza</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                 {[
                   { name: "The Classic Margherita", desc: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil.", price: "₹595", pairing: "Pairs with: The Golden Anvil" },
                   { name: "Spicy Pepperoni & Hot Honey", desc: "Double pepperoni, mozzarella, chili flakes, drizzled with house-infused hot honey.", price: "₹795", pairing: "Pairs with: Citrus Horizon" },
                   { name: "Truffle Mushroom", desc: "Wild mushrooms, white sauce, mozzarella, truffle cream, thyme.", price: "₹745", pairing: "Pairs with: Shadow Weaver" },
                   { name: "Ghee Roast Chicken", desc: "Mangalorean style ghee roast chicken, caramelized onions, curry leaf oil.", price: "₹725", pairing: "Pairs with: Crimson Tide" },
                 ].map((item, i) => (
                   <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} key={i}>
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">{item.name}</h3>
                        <span className="text-brand-accent font-serif">{item.price}</span>
                      </div>
                      <p className="text-brand-muted text-sm mb-2">{item.desc}</p>
                      <p className="text-xs text-brand-text/50 uppercase tracking-widest italic">{item.pairing}</p>
                   </motion.div>
                 ))}
              </div>
            </section>
          </div>
       </div>
    </div>
  );
}
