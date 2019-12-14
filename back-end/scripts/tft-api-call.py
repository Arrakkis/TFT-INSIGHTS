import requests
key = 'RGAPI-c757a3da-6d4f-44b5-8904-0251d30e02bc'

def testAPIKey(key):
  url = 'https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=' + key
  response = requests.get(url)
  if 'status' in response.json():
    print("BAD Key")
  else:
    print("GOOD Key")
  return

testAPIKey(key)

def requestSummonerPuuid(r1, playerName, key):
  url = 'https://'+ r1 + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + playerName + '?api_key=' + key
  response = requests.get(url)
  return response.json()['puuid']

def requestMatchHistory(r2, puuid, key):
  url = 'https://' + r2 + '.api.riotgames.com/tft/match/v1/matches/by-puuid/' + puuid + '/ids?count=999999999&api_key=' + key
  response = requests.get(url)
  return response.json()

def requestMatchDetails(r2, matchId, key):
  url = 'https://' + r2 + '.api.riotgames.com/tft/match/v1/matches/' + matchId + '?api_key=' + key
  response = requests.get(url)
  return response.json()

items = {1: 'B.F. Sword', 2: 'Recurve Bow', 3: 'Needlessly Large Rod', 4: 'Tear of the Goddess', 5: 'Chain Vest', 6: 'Negatron Cloak', 7: "Giant's Belt", 8: 'Spatula', 9: 'Sparring Gloves', 11: 'Deathblade', 12: 'Giant Slayer', 13: 'Hextech Gunblade',14: 'Spear of Shojin', 15: 'Guardian Angel', 16: 'Bloodthirster', 17: "Zeke's Herald", 18: "Youmuu's Ghostblade", 19: 'Infinity Edge', 22: 'Rapid Firecannon', 23: "Guinsoo's Rageblade", 24: 'Statikk Shiv', 25: 'Phantom Dancer', 26: "Runaan's Hurricane", 27: 'Titanic Hydra', 28: 'Blade of the Ruined King', 29: 'Repeating Crossbow', 33: "Rabadon's Deathcap", 34: "Luden's Echo", 35: 'Locked of the Iron Solari', 36: 'Ionic Spark', 37: 'Morellonomicon', 38: 'Inferno Cinder', 39: 'JeweledGuantlet', 44: "Seraph's Embrace", 45: 'Frozen Heart', 46: 'Hush', 47: 'Redemption', 48: "Mage's Cap", 49: 'Hand of Justice', 55: 'Thornmail', 56: 'Sword Breaker', 57: 'Red Buff', 58: "Warden's Mail", 59: 'Iceborne Gauntlet', 66: "Dragon's Claw", 67: 'Zephyr', 68: 'Talisman of Light', 69: 'Quicksilver',77: "Warmog's Armor", 78: 'Frozen Mallet', 79: 'Trap Claw', 88: 'Force of Nature', 89: 'Berserker Axe', 99: "Thief's Gloves", 10201: 'Inferno Hex', 10202: 'Mountain Hex', 10203: 'Ocean Hex', 10204: 'Cloud Hex'}
champions = {'Aatrox': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Annie': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Ashe': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Azir': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Brand': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Braum': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Diana': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'DrMundo': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Ezreal': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Ivern': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Janna': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Jax': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Khazix': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Kindred': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'KogMaw': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Leblanc': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Lux': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Malphite': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Malzahar': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Maokai': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'MasterYi': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Nami': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Nasus': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Nautilus': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Neeko': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Nocturne': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Olaf': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Ornn': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Qiyana': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'RekSai': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Renekton': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Singed': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Sion': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Sivir': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Skarner': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Soraka': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Syndra': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Taliyah': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Taric': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Thresh': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Twitch': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Varus': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Vayne': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Veigar': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Vladimir': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Volibear': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Warwick': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Yasuo': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Yorick': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Zed': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}, 'Zyra': {1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0]}}
traits = {'Count':0, 'Cloud': {2: [0, 0, 0], 3: [0, 0, 0], 4: [0, 0, 0]}, 'Crystal': {2: [0, 0, 0], 4: [0, 0, 0]}, 'Desert': {2: [0, 0, 0], 4: [0, 0, 0]}, 'Electric': {2: [0, 0, 0], 3: [0, 0, 0], 4: [0, 0, 0]}, 'Glacial': {2: [0, 0, 0], 4: [0, 0, 0], 6: [0, 0, 0]}, 'Inferno': {3: [0, 0, 0], 6: [0, 0, 0], 9: [0, 0, 0]}, 'Light': {3: [0, 0, 0], 6: [0, 0, 0], 9: [0, 0, 0]}, 'Mountain': {2: [0, 0, 0]}, 'Ocean': {2: [0, 0, 0], 4: [0, 0, 0], 6: [0, 0, 0]}, 'Poison': {3: [0, 0, 0]}, 'Shadow': {2: [0, 0, 0], 4: [0, 0, 0]}, 'Steel': {2: [0, 0, 0], 3: [0, 0, 0], 4: [0, 0, 0]}, 'Woodland': {3: [0, 0, 0]}, 'Alchemist': {1: [0, 0, 0]}, 'Assassin': {3: [0, 0, 0], 6: [0, 0, 0]}, 'Avatar': {1: [0, 0, 0]}, 'Berserker': {3: [0, 0, 0], 6: [0, 0, 0]}, 'Blademaster': {2: [0, 0, 0], 4: [0, 0, 0], 6: [0, 0, 0]}, 'Druid': {2: [0, 0, 0]}, 'Mage': {3: [0, 0, 0], 6: [0, 0, 0]}, 'Mystic': {2: [0, 0, 0], 4: [0, 0, 0]}, 'Predator': {3: [0, 0, 0]}, 'Ranger': {2: [0, 0, 0], 4: [0, 0, 0], 6: [0, 0, 0]}, 'Summoner': {3: [0, 0, 0], 6: [0, 0, 0]}, 'Warden': {2: [0, 0, 0], 4: [0, 0, 0], 6: [0, 0, 0]}}

class matchData:
  def __init__(self, data):
    self.data = data

  def isRanked(self):
    return self.data["info"]["queue_id"] == 1100

  def getMatchId(self):
    return self.data["metadata"]["match_id"].split("_")

  def getLevel(self, place):
    return self.data["info"]["participants"][place-1]["level"]

  def getTraits(self, place):
    t_data = self.data["info"]["participants"][place-1]["traits"]
    traits = {}
    for t in range(len(t_data)):
      if t_data[t]["num_units"] not in traits:
        traits[t_data[t]["num_units"]] = [t_data[t]["name"]]
      else:
        traits[t_data[t]["num_units"]].append(t_data[t]["name"]) 
    return traits

  def getUnits(self, place):
    u_data = self.data["info"]["participants"][place-1]["units"]
    units = {}
    for u in range(len(u_data)):
      i_data = [items[item] for item in u_data[u]["items"]]
      units[u_data[u]["name"]] = [i_data, u_data[u]["tier"]]
    return units
  
  def getData(self, place):
    return {"match_id": self.getMatchId(),
            "place": place,
            "level": self.getLevel(place),
            "traits": self.getTraits(place),
            "units": self.getUnits(place)}
  #def addTraitPopularity(self, place):
    

def getr2(r1):
  if r1 == 'na1':
    return 'americas'
  elif r2 == 'euw1':
    return 'europe'
  elif r2 == 'kr':
    return 'asia'
  return False

def getPlayerMatches(r1, playerName, key):
  r2 = getr2(r1)
  puuid = requestSummonerPuuid(r1, playerName, key)
  matchHistory = requestMatchHistory(r2, puuid, key)
  for matchId in matchHistory:
    matchDetails = requestMatchDetails(r2, matchId, key)
    for n in range(1,9):
      print(matchData(matchDetails).getData(n))
    print("\n\n")
  return ''

r1 = "na1"
playerName = 'DeliciousMilkGG'
r2 = getr2(r1)
puuid = requestSummonerPuuid(r1, playerName, key)
matchHistory = requestMatchHistory(r2, puuid, key)
for matchId in matchHistory:
  matchDetails = requestMatchDetails(r2, matchId, key)
  for n in range(1,9):
    u = matchData(matchDetails).getUnits(n)
    for c in u.keys():
      if c not in champions:
        champions.append(c)
    print(champions)

getPlayerMatches('na1', 'DeliciousMilkGG', key)

