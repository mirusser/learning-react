using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StudyGroups.WebApi.Business;
using StudyGroups.WebApi.Database.Models;

namespace StudyGroups.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudyGroupsController : ControllerBase
    {
        private readonly IStudyGroupService _studyGroupService;

        public StudyGroupsController(IStudyGroupService strudyGroupService)
        {
            _studyGroupService = strudyGroupService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroup(List<Card> cards)
        {
            await _studyGroupService.AddAsync(cards);

            return Ok();
        }

        [HttpGet("{groupName}")]
        public async Task<IActionResult> GetGroup(string groupName)
        {
            var cards = await _studyGroupService.GetCardsAsync(groupName);

            return Ok(cards);
        }

        [HttpGet("GroupNames")]
        public IActionResult GetGroupNames()
        {
            var groupNames = _studyGroupService.GetGroupNames();
            return Ok(groupNames);
        }

        [HttpDelete("{groupName}")]
        public async Task<IActionResult> DeleteGroup(string groupName)
        {
            var result = await _studyGroupService.DeleteGroupAsync(groupName);

            return Ok(result.DeletedCount > 0);
        }
    }
}