using UnityEngine;
using UnityEngine.UI;
using EdjCase.BIG.Agent.Agents;
using EdjCase.BIG.Agent.Identities;
using EdjCase.BIG.Candid.Models;

namespace BIG.GameKit
{
    public class TestICPAgent : MonoBehaviour
    {
        public string greetFrontend = "https://nytzv-wqaaa-aaaan-qixdq-cai.icp0.io/";
        public string greetBackendCanister = "n7s7b-3iaaa-aaaan-qixda-cai";

        Text mMyPrincipalText = null;
        Button mGreetButton = null;
        Ed25519Identity mEd25519Identity = null;
        DelegationIdentity mDelegationIdentity = null;

        internal Ed25519Identity TestIdentity { get { return mEd25519Identity; } }

        internal DelegationIdentity DelegationIdentity
        {
            get { return mDelegationIdentity; }
            set
            {
                mDelegationIdentity = value;

                if (mDelegationIdentity != null && mGreetButton != null)
                {
                    mGreetButton.interactable = true;
                }
            }
        }

        // Start is called before the first frame update
        void Start()
        {
            var go = GameObject.Find("My Princinpal");
            mMyPrincipalText = go?.GetComponent<Text>();

            var buttonGo = GameObject.Find("Button_Greet");
            mGreetButton = buttonGo?.GetComponent<Button>();

            mEd25519Identity = Ed25519Identity.Generate();
        }

        // Update is called once per frame
        void Update()
        {
        }

        public void Greet()
        {
            CallCanisterGreet();
        }

        private async void CallCanisterGreet()
        {
            if (DelegationIdentity == null)
                return;

            // Initialize HttpAgent.
            var agent = new HttpAgent(DelegationIdentity);

            var canisterId = Principal.FromText(greetBackendCanister);

            // Initialize the client and make the call.
            var client = new GreetingClient.GreetingClient(agent, canisterId);
            var content = await client.Greet();

            if (mMyPrincipalText != null)
                mMyPrincipalText.text = content;
        }
    }
}
