using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using StudyGroups.WebApi.Database.Models;

namespace StudyGroups.WebApi.Business
{
    public interface IStudyGroupService
    {
        Task AddAsync(List<Card> cards);

        Task<IEnumerable<Card>> GetCardsAsync(string groupName);

        List<string> GetGroupNames();

        Task<DeleteResult> DeleteGroupAsync(string groupName);
    }
}