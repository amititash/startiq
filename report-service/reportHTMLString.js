module.exports = `
<body>
    <div style="border:3px solid navy ; padding : 10px; margin : 5px;">
        <h2 style="text-align:center;" >StartIQ Analysis of your idea 🤖</h2>
        <h4 style="text-align:center;">YOUR IDEA</h4>
        <h5>What is your idea?</h5>
        <p>{{idea_description}}</p>
        {{#if idea_name}}
        <h5>What do you call your product or service?</h5>
        <p>{{idea_name}}</p>
        {{/if}}
        <h5>What market categories are you competing in?</h5>
        <p>{{user_categories}}</p>



        <h4 style="text-align:center;">COMPETITORS AND EXISTING LANDSCAPE</h4>
        <h5>How old is this idea?</h5>
        <p>Ideas that are similar to yours are about {{freshness}} years old, other companies may have a head start.</p>
        <h5>What percentage of similar startups have been funded?</h5>
        <p>{{fundability}}% of companies that sound like yours have been funded either through angel investments or venture capital.</p>
        <h5>Are there companies providing similar products or services?</h5>
        <p>Based on our analysis, and your input. It seems like at least these companies are providing similar offerings in the market. It would be useful to research these and other similar companies to better define your value add.</p>
        <ul class="similar_companies">
            {{#each competitors}}
            <li>{{this.cname}} : <a href="http://{{this.url}}">{{this.url}}</a>(Relevance : {{this.crel}})</li>
            {{/each}}
        </ul>




        <h4 style="text-align:center;">YOUR CUSTOMERS</h4>
        <h5>Who are your target customers?</h5>
        <p>You are serving {{target_segment}}. Your target customer is a(n) {{targetCustomer}} and specifically {{targetCustomerDescription}} </p>
        <h5>What is the minimum size of the total market you can address?</h5>
        <p>{{customerSize}} {{targetCustomerDescription}}</p>




        <h4 style="text-align:center;">BUSINESS MODEL</h4>
        <h5>REVENUE</h5>
        <h1></h1>
        <h5>What is your revenue model?</h5>
        {{#if subscriptionService}}
        <p>It looks like you make money through a subscription model. This means...</p>
        {{else}}
        <p>It looks like you make money through a non-subscription model. This means...</p>
        {{/if}}

        <h5>How many customers will you serve each month?</h5>
        <p>{{customerSize}}</p>
        {{#if unitPrice}}
        <h5>How will you price your product?</h5>
        <p>$ {{unitPrice}}</p>
        {{/if}}
        {{#if subscriptionService}}
        <h5>What is your anticipated revenue from subscriptions?</h5>
        <p>\${{annualRevenueFromSubscription}}</p>
        {{/if}}
        {{#if annualRevenueFromOtherSales}}
        <h5>What is your anticipated revenue from other sales?</h5>
        <p>\${{annualRevenueFromOtherSales}}</p>
        {{/if}}

        <h5>COSTS</h5>
        <h1></h1>
        <h5>How much does it cost you to acquire a customer?</h5>
        <p>$ {{customerAcquisitionCost}}</p>
        {{#if unitCost}}
        <h5>How much does it cost you to produce a unit of your product?</h5>
        <p>$ {{unitCost}}</p>
        {{/if}}
        <h5>How much are your labor costs?</h5>
        <ul class="employees_list">
            {{#each employees}}
            <li>You said you will hire or pay for {{this.position}} . This will cost you a total of \${{this.salary}} per year.</li>
            {{/each}}
        </ul>
        <p>Your total cost of hiring employees will be <strong>\${{employeesCost}}</strong></p>
        <h5>How much are your infrastructure and technology costs?</h5>
        <ul class="other_expenses_list">
            {{#each otherExpenses}}
            <li>You said you will pay for {{this.expenseType}} . This will cost you a total of \${{this.cost}} per year.</li>
            {{/each}}
        </ul>
        <p>Your total cost of infrastructure and technology will be <strong>\${{otherExpensesCost}}</strong></p>
        <h5>What are your annual total costs?</h5>
        <p>$ {{annualCosts}}</p>




        {{#if inProfit}}
        <h5>PROFIT</h5>
        <p>Based on the information you provided your total revenue is \${{totalAnnualRevenue}} and your total costs of acquiring customers and producing your good is \${{totalCustomerAcquisitionAndProductionCost}}. Your profit figure, excluding costs of labor and infrastructure is: \${{profitExcludingLabourAndInfraCosts}}. </p>
        <p>If we include the cost of labor and infrastructure, the profits are \${{annualProfit}}</p>
        <p>This is a profit margin of {{profitToRevenueRatio}} %</p>
        {{else}}
        <h5>LOSS</h5>
        <p>Based on the information you provided your total revenue is \${{totalAnnualRevenue}} and your total costs of acquiring customers and producing your good is \${{totalCustomerAcquisitionAndProductionCost}}.  </p>
        {{#if lossExcludingLabourAndInfraCosts}}
        <p>Your loss figure, excluding costs of labor and infrastructure is: \${{lossExcludingLabourAndInfraCosts}}.</p>
        {{else}}
        <p>Your profit figure, excluding costs of labor and infrastructure is: \${{profitExcludingLabourAndInfraCosts}}.</p>
        {{/if}}
        <p>If we include the cost of labor and infrastructure, the losses are \${{annualLoss}}</p>
        <p>This is a loss margin of {{lossToRevenueRatio}} %</p>
        {{/if}}







        <h4 style="text-align:center;">TEAM</h4>
        <h5>YOUR CAPABILITIES</h5>
        <p><strong>Based on your responses to founder quiz your skillset includes the following management and startup skills:</strong></p>
        <p>These are your top skills:</p>
        <ul>
            <li>{{startupSkill1}}</li>
            <li>{{startupSkill2}}</li>
        </ul>
        <p><strong>Based on your responses, it looks like your technical strength lies in the following skills:</strong></p>
        <p>{{topSkill}}</p>

        <h5>TEAM CAPABILITIES</h5>
        <p>This suggests that based on what this startup needs you may want to consider hiring people who are stronger in the following skills </p>
        <ul>
            <li>{{teamMemberSkill1}}</li>
            <li>{{teamMemberSkill2}}</li>
            <li>{{teamMemberSkill3}}</li>
        </ul>
        <p>In terms of technical skills, you may want to find people who have these skills that are different from you (experimental feature, currently for only tech-focused startups)</p>
        <ul class="people_list">
            {{#each antiSkills}}
            <li>{{this}}</li>
            {{/each}}
        </ul>


        <h4 style="text-align:center;">BOTTOM LINE</h4>
        <h5>Based on what you provided, it looks like the following things are what you need to consider:</h5>    
    </div>
</body>
`