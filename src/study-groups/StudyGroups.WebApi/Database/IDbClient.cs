using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using StudyGroups.WebApi.Database.Models;

namespace StudyGroups.WebApi.Database
{
    public interface IDbClient
    {
        IMongoCollection<Card> GetCardsCollection();
    }
}