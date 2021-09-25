using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace StudyGroups.WebApi.Database.Models
{
    public class Card
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string GroupName { get; set; }
        public string Front { get; set; }
        public string Back { get; set; }
    }
}