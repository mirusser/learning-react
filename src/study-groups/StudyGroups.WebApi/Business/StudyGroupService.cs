using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using StudyGroups.WebApi.Database;
using StudyGroups.WebApi.Database.Models;

namespace StudyGroups.WebApi.Business
{
    public class StudyGroupService : IStudyGroupService
    {
        private readonly IMongoCollection<Card> _cardsCollection;

        public StudyGroupService(IDbClient dbClient)
        {
            _cardsCollection = dbClient.GetCardsCollection();
        }

        public async Task AddAsync(List<Card> cards)
        {
            await _cardsCollection.InsertManyAsync(cards);
        }

        public async Task<DeleteResult> DeleteGroupAsync(string groupName)
        {
            var result = await _cardsCollection.DeleteManyAsync(c => c.GroupName == groupName);

            return result;
        }

        public async Task<IEnumerable<Card>> GetCardsAsync(string groupName)
        {
            var cards = (await _cardsCollection.FindAsync(cards => cards.GroupName == groupName)).ToEnumerable();

            return cards;
        }

        public List<string> GetGroupNames()
        {
            var groupNames = _cardsCollection.AsQueryable().Select(c => c.GroupName).Distinct().ToList();

            return groupNames;
        }
    }
}