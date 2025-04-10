import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <br />
      <br />
      <p>Ingredients</p>
      <p className="p-5">Chocolate Chip Cookies:</p>
      <div className="flex flex-wrap border-dotted border-4 border-gray-600 p-4 justify-left">
        <p className="p-1 m-1">Salted butter, softened</p>
        <p className="p-1 m-1">Granulated sugar</p>
        <p className="p-1 m-1">Brown sugar</p>
        <p className="p-1 m-1">Egg</p>
        <p className="p-1 m-1">Vanilla extract</p>
        <p className="p-1 m-1">All-purpose flour</p>
        <p className="p-1 m-1">Baking soda</p>
        <p className="p-1 m-1">Salt</p>
        <p className="p-1 m-1">Chocolate chips</p>
      </div>

      <img
        alt="Error"
        className="justify-center"
        src="https://cookiesfordays.com/wp-content/uploads/2024/01/chocolate-chip-cookie-recipe-23-1024x1536.jpg"
      />
      <br />

      <p>Steps</p>

      <p>Preheat the oven to 350° F.</p>
      <p>
        cream together the butter, granulated sugar and brown sugar until light
        in color and fluffy in texture.
      </p>
      <p>
        Scrape the sides of the bowl and add in the egg and vanilla extract. Mix
        until well combined.
      </p>
      <p>
        Add in the flour, baking soda and salt. Mix until a soft but not sticky
        dough forms.
      </p>
      <p>Fold in your chocolate chips</p>
      <p>
        Scoop the dough out into 1 1/2 tbsp portions (a #40 cookie scoop works
        great here) and arrange on your cookie sheet
      </p>
      <p>
        Bake at 350° F for 8-10 minutes or until the cookies have spread and are
        just beginning to turn golden brown on the edges.
      </p>
      <p>Let cool for 5 minutes</p>
    </div>
  );
}
