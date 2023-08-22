const OpenAI = require('openai');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;


const openai = new OpenAI({
  organization: process.env.ORG_KEY,
  apiKey: process.env.API_KEY,
});


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send();
});

app.post('/', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.chatCompletion.create({
      model: "gpt-3.5-turbo", // Use the appropriate engine
      prompt: `You are a smart, experienced and casual technical support agent called Kisan Seva (mention this when you start talking for the first time)
      for a Farmer support web application company called Anndata GPT). If the answer to the question is not in the documentation specified below, just say: 'I am not trained for this question. Let me connect to the support team'.
      Documentation:
      Instability: It is said that Indian agriculture is a ‘gamble of monsoon’. It is at the mercy of the weather god. Being of rain-fed, Indian agriculture exhibits instability in production, leading to fluctuations in national income as well as general price level. This is what we experienced in 2002-03 when agriculture made a disastrous start. An all-time record in food grains production was achieved in 2001-02. In 2002-03, the first ever deficient monsoon in 15 years was declared. The rainfall deficiency for the country as a whole amounted to more than 20 p.c. in 2003-04. As a result, the production of food grains fell by about 14 p.c. and non-food grains by 9 p.c. Reports of starvation death from two drought-hit states of Rajasthan and Madhya Pradesh indicate the dismal performance of the agricultural sector over the last 58 years or so.
      Cropping Pattern: The crops that are grown in India are divided into two broad categories: food crops and non-food crops. An unhealthy competition exists between these two crops. Of the total cropped area, nearly three-fourths are occupied by food crops. The ratio of food grains to non-food grains was 80:20 in 1980-81 vis-a-vis 77:23 in 1950-51. By 2000-01, the area under non-food grains increased to roughly 35 p.c. Within food grains, largest increase in area has been recorded by wheat, followed by rice. Within commercial crops, largest increase-has occurred in the case of sugarcane, followed by oilseeds and cotton. The horticulture sector contributed about 28 p.c. of GDP in agriculture in 2005-06. Such diversification of farming towards horticulture crops may be related to (i) demand-driven, (ii) supply-driven, and (iii) policy-driven forces.The important point to note here is that the country is yet to evolve a balanced crop pattern. Since a large proportion of land is devoted to main food crops like wheat and rice, there are shortages of oilseeds and pulses. This is the result of faulty agricultural planning. For instance, an agricultural price support policy in favour of food crops, mainly wheat and rice in the green revolution period has distorted the cropping pattern. Very little attention has been given to agricultural diversification. Floriculture and horticulture are two profitable agro-business that require special attention
      Land Ownership: Vast inequality exists in the distribution of land in India. A great chunk of land is owned by a relatively small section of the rich farmers, landlords and money lenders, while a very little amount of land is owned by the majority farmers. Nearly 76 p.c. of small and marginal farmers own less than 2 hectares of land (2000-01). Total cultivable land belonging to these people covers as much as 35 p.c. On the other hand, big farmers owning more than 10 hectares land hold as much as 14 p.c. of the cultivable lands.
      Average size of Holding: Another peculiarity as well as an important problem is the smallness in average size of holding. The average size of holding declined from 2.28 hectares in 1970-71 to 1.41 hectares in 1995-96 and 1.32 hectares in 2002-01. This makes the efficient use of land virtually impossible and adds to the difficulties of increasing capital equipment on the farms.
      Land Tenure: The land tenure system of India is also far from perfect. Tenants do not enjoy security of tenure. They are evicted by landlords on any pretext.
      Production Technique: The technique of production in India’s agriculture is old and outmoded. Still, Indian farmers are using cow-plough method of cultivation on a large-scale. Use of chemical fertilisers, high-yielding varieties of seeds, tractors, and machines are used on an insignificant scale. However, in recent times because of the introduction of the green revolution in the 1960s, some improvements have taken place. Still then, their uses are not significant and uniform throughout India.
      Excessive Pressure on Land: Another problem from which Indian agriculture suffers is that the pressure on land as compared to the availability of land is too high. Finding a bleak employment prospects, people take up agriculture as an important occupation. But they ultimately reduce themselves to part time jobs. As a result, Indian agriculture exhibits the existence of a large bogey of unemployed and disguisedly unemployed. They remain unemployed in part of the seasons. This causes backwardness in Indian agriculture. Further, marketing of agricultural products is far from satisfactory. Because of low productivity, the quantum of surplus generated in the agricultural sector is low. Moreover, the collection of these surpluses for the purpose of marketing presents a serious problem. Again, the typical Indian farmer who has to work on an ‘uneconomic holding’, using traditional methods of cultivation and being exposed to the risks of poor agricultural season, is always in debt. The Indian farmer is a perennial debtor. NSSO in its 59th Round of surveys observed that 48.6 p.c. of rural households were indebted and, of the total number of indebted farmers, 61 p.c. had operational holding below 1 hectare. Because of the said problems plaguing Indian agriculture, another vital problem that emerges from this analysis is the low productivity per unit of land and labour, though India is an agricultural country. Technological, economic and social, factors are responsible for the sorry productivity performance. However, in recent years, several measures have been adopted by the government to improve productivities. Some achievements have been recorded, but still inadequate compared to the country’s needs.
      ${message}`,
      max_tokens: 150,
      temperature: 0.7,
    });

    console.log(response.data);
    res.json({ generatedText: response.data});
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: 'An error occurred while generating text.' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
