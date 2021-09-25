using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using StudyGroups.WebApi.Database.Models;

namespace StudyGroups.WebApi.Database
{
    public class DbClient : IDbClient
    {
        private readonly IMongoDatabase _database;

        public DbClient(IOptions<DbConfig> dbConfig)
        {
            var client = new MongoClient(dbConfig.Value.ConnectionString);
            _database = client.GetDatabase(dbConfig.Value.DbName);
        }

        public IMongoCollection<Card> GetCardsCollection()
        {
            return _database.GetCollection<Card>("Cards");
        }
    }
}