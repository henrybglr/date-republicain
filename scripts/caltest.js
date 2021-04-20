//french republican calendar

const DAYS = ['the grape', 'saffron', 'the chestnut', 'the autumn crocus', 'the horse', 'impatiens', 'the carrot', 'amaranth', 'the parsnip', 'the storage tank', 'the potato', 'the strawflower', 'the winter squash', 'mignonette', 'the donkey', 'the mirabilis', 'the pumpkin', 'buckwheat', 'the sunflower', 'the wine-press', 'hemp', 'the peach', 'the turnip', 'amaryllis', 'the ox', 'the eggplant', 'the chili pepper', 'the tomato', 'barley', 'the barrel', 'the apple', 'celery', 'the pear', 'beetroot', 'the goose', 'the heliotrope', 'the fig', 'black salsify', 'the chequer tree', 'the plow', 'the common salsify', 'the water caltrop', 'the jerusalem artichoke',
    'the endive', 'the turkey', 'skirret', 'watercress', 'leadworts', 'the pomegranate', 'the harrow', 'baccharis', 'azarole', 'madder', 'the orange', 'the pheasant', 'the pistachio', 'the tuberous pea', 'quince', 'the service tree', 'the roller', 'rampion', 'the cattle turnip', 'chicory', 'medlar', 'the pig', 'lamb\'s lettuce', 'the cauliflower', 'honey', 'juniper', 'the pickaxe', 'wax', 'the horseradish', 'the cedar tree', 'the fir tree', 'the roe deer', 'the gorse', 'the cypress tree', 'ivy', 'the savin juniper', 'the grub-hoe', 'the sugar maple', 'heather', 'the reed grass', 'sorrel', 'the cricket', 'the pine nut', 'the cork', 'the truffle', 'the olive', 
    'the shovel', 'peat', 'coal', 'asphalt', 'sulfur', 'the dog', 'lava', 'topsoil', 'manure', 'saltpeter', 'the flail', 'granite', 'clay', 'slate', 'sandstone', 'the rabbit', 'flint', 'marlstone', 'limestone', 'marble', 'the winnowing basket', 'gypsum', 'salt', 'iron', 'copper', 'the cat', 'tin', 'lead', 'zinc', 'mercury', 'the sieve', 'the spurge-laurel', 'moss', 'butcher\'s broom', 'the snowdrop', 'the bull', 'laurustinus', 'the tinder polypore', 'spurge laurel', 'the poplar', 'the axe', 'hellebore', 'broccoli', 'bay laurel', 'the filbert', 'the cow', 'the box tree', 'lichen', 'the yew tree', 'lungwort', 'the billhook', 'pennycress', 'the rose daphne', 
    'the couch grass', 'the common knotgrass', 'the hare', 'woad', 'the hazel', 'the cyclamen', 'celandine', 'the sled', 'coltsfoot', 'the dogwood', 'matthiola', 'privet', 'the billy goat', 'wild ginger', 'the italian buckhorn', 'the violet', 'the goat willow', 'the spade', 'the narcissus', 'the elm', 'the common fumitory', 'the hedge mustard', 'the goat', 'spinach', 'leopard\'s bane', 'pimpernel', 'chervil', 'twine', 'the mandrake', 'parsley', 'scurvy-grass', 'the daisy', 'the tuna', 'the dandelion', 'the wood anenome', 'the maidenhair fern', 'the ash tree', 'the dibber', 'the primrose', 'the plane tree', 'the asparagus', 'the tulip', 'the hen', 'chard', 'the birch',
     'the daffodil', 'the alder', 'the hatchery', 'the periwinkle', 'the hornbeam', 'the morel', 'the beech tree', 'the bee', 'lettuce', 'the larch', 'hemlock', 'the radish', 'the beehive', 'the judas tree', 'romaine', 'the horse chestnut', 'arugala', 'the pigeon', 'the lilac', 'the wood anemone', 'the pansy', 'the bilberry', 'the grafting knife', 'the rose', 'the oak tree', 'the fern', 'the hawthorn', 'the nightingale', 'the columbine', 'lily of the valley', 'the button mushroom', 'the hyacinth', 'the rake', 'rhubarb', 'the sanfoin', 'the wallflower', 'the fan palm', 'the silkworm', 'comfrey', 'the salad burnet', 'the basket of gold', 'orache', 'the hoe', 'the sea thrift', 
     'the fritillary', 'the starflower', 'valerian', 'the carp', 'the spindle', 'the chive', 'bugloss', 'wild mustard', 'the shepherd\'s crook', 'alfalfa', 'daylily', 'clover', 'angelica', 'the duck', 'lemon balm', 'oat grass', 'the martagon lily', 'wild thyme', 'the scythe', 'the strawberry', 'bishop\'s wort', 'the pea', 'the acacia', 'the quail', 'the carnation', 'elderberry', 'the poppy', 'the lime tree', 'the pitchfork', 'cornflower', 'camomile', 'honeysuckle', 'bedstraw', 'the tench', 'jasmine', 'verbena', 'thyme', 'the peony', 'the hand cart', 'rye', 'the oat', 'the onion', 'speedwell', 'the mule', 'rosemary', 'the cucumber', 'the shallot', 'wormwood', 'the sickle', 
     'coriander', 'the artichoke', 'the clove', 'lavender', 'the chamois goat', 'tobacco', 'redcurrant', 'the vetchling', 'the cherry', 'parks', 'mint', 'cumin', 'the bean', 'alkanet', 'the guinea fowl', 'sage', 'garlic', 'the vetch', 'wheat', 'the shawm', 'spelt', 'the mullein', 'the melon', 'ryegrass', 'the ram', 'the horsetail', 'mugwort', 'the safflower', 'the blackberry', 'the watering can', 'foxtail millet', 'glasswort', 'the apricot', 'basil', 'the sheep', 'the marshmallow', 'flax', 'the almond', 'the gentian', 'the canal lock', 'the carline thistle', 'the caper', 'the lentil', 'inula', 'the otter', 'myrtle', 'rapeseed', 'lupin', 'cotton', 'the mill', 'the plum',
    'millet', 'the puffball', 'barley', 'the salmon', 'tuberose', 'winter barley', 'apocynum', 'liquorice', 'the ladder', 'the watermelon', 'fennel', 'the barberry', 'the walnut', 'the trout', 'the lemon', 'teasel', 'buckthorn', 'the marigold', 'the harvesting basket', 'the wild rose', 'the hazelnut', 'hops', 'sorghum', 'the crayfish', 'the bitter orange', 'the goldenrod', 'maize', 'the sweet chestnut', 'the pack basket'];

const MONTHS = ['Vendémiaire', 'Brumaire', 'Frimaire', 'Nivôse', 'Pluviôse',
'Ventôse', 'Germinal', 'Floréal', 'Prairial', 'Messidor', 'Thermidor',
'Fructidor', 'Sans-Culottides'];

const DAYS_OF_DECADE = ['Primidi', 'Duodi', 'Tridi', 'Quartidi', 'Quintidi',
    'Sextidi', 'Septidi', 'Octidi', 'Nonidi', 'Décadi'];

function halfYear(date) {
    return date.getMonth() < 8 || (date.getMonth() === 8 && date.getDate() < 22);
}

function year(date) {
    if (halfYear(date)) {
        return date.getFullYear() - 1792;
    }
    return date.getFullYear() - 1791;
}

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
function dayOfYear(date) {
    const currentYear = halfYear(date) ? date.getFullYear() - 1 : date.getFullYear(),
        firstDayOfYear = new Date(currentYear, 8, 22);
    return Math.floor((date - firstDayOfYear) / ONE_DAY_IN_MS) + 1;
}

function dayOfYearName(date) {
    return DAYS[dayOfYear(date) - 1];
}

function month(date) {
    return Math.floor((dayOfYear(date) - 1) / 30) + 1;
}

function monthName(date) {
    return MONTHS[month(date) - 1];
}

function dayOfMonth(date) {
    return ((dayOfYear(date) - 1) - (month(date) - 1) * 30) + 1;
}

function dayOfDecade(date) {
    return ((dayOfMonth(date) - 1) % 10) + 1;
}

function dayOfDecadeName(date) {
    return DAYS_OF_DECADE[dayOfDecade(date) - 1];
}

const someDay = new Date();

document.write(`Today is ${dayOfMonth(someDay)} ${dayOfDecadeName(someDay)} ${monthName(someDay)} 
in the year ${year(someDay)}, celebrating ${dayOfYearName(someDay)}.`)
    