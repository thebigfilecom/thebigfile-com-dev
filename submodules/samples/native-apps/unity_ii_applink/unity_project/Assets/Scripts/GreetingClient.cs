using EdjCase.BIG.Agent.Agents;
using EdjCase.BIG.Candid.Models;
using EdjCase.BIG.Candid;
using EdjCase.BIG.Agent.Responses;

namespace GreetingClient
{
	public class GreetingClient
	{
		public IAgent Agent { get; }

		public Principal CanisterId { get; }

#nullable enable
		public EdjCase.BIG.Candid.CandidConverter? Converter { get; }

		public GreetingClient(IAgent agent, Principal canisterId, CandidConverter? converter = default)
		{
			this.Agent = agent;
			this.CanisterId = canisterId;
			this.Converter = converter;
		}
#nullable disable

		public async System.Threading.Tasks.Task<string> Greet()
		{
			CandidArg arg = CandidArg.FromCandid();
			QueryResponse response = await this.Agent.QueryAsync(this.CanisterId, "greet", arg);
			CandidArg reply = response.ThrowOrGetReply();
			return reply.ToObjects<string>(this.Converter);
		}
	}
}
