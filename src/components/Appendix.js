import React from "react";
import "../css/App.css";
import NavBar from "./NavBar";

class Appendix extends React.Component {
	render() {
		return (
			<span className="mainContainer">
				<NavBar history={this.props.history} activeIndex={0} />
				<div className="background1"></div>
				<table className="appendix-table">
					<thead className="appendix-table-head">
						<tr className="appendix-table-head-row">
							<th>T E R M</th>
							<th>D E S C R I P T I O N</th>
						</tr>
					</thead>
					<tbody className="appendix-table-body">
						<tr className="appendix-table-body-row">
							<td className="appendix-table-body-cell-term">
								<h3>W I N R A T E</h3>
							</td>
							<td className="appendix-table-body-cell-description">
								<p className="appendix-description-text">
									Our weighted average winrate calculations are done by looking
									at how highly a composition placed in its game (two positions
									are calculated if there are two of the same composition in a
									single game). For example, for a first place, the
									specification awards 7/7 points (equivalent to a 100% score),
									a last place position 0/7 points (equivalent to a 0% score),
									and a third place score of 5/7 (equivalent to around a 71%
									score).
									<br />
									The overall score is divided by 7 * number of games that
									composition appears in. This give us a ratio that determines
									the average position of that composition.
									<br />
									In order to separate the myriad of different final
									compositions, only the top 6 traits of that composition are
									ever tracked at any one time.
									<br />
									However, alternate search methods are also handled by our stat
									tracking, one notable feature is the ability to select up to
									three traits and see performance stats for any supplementary
									trait. When this is done, a new average set of stats is
									generated for every combination available in the data.
									<br />
									For example, by selecting Light 6 and Mystic 2 and selecting
									the option for one additional trait, you can see all
									combinations for that 3rd trait, and their associated stats.
									This will account for all variations of that composition,
									given those 3 traits and tiers.
								</p>
							</td>
						</tr>
						<tr className="appendix-table-body-row">
							<td className="appendix-table-body-cell-term">
								<h3>P O P U L A R I T Y</h3>
							</td>
							<td className="appendix-table-body-cell-description">
								<p className="appendix-description-text">
									Popularity is a simple measurement of how often that
									composition appeared in a game.
									<br />
									Mathematically speaking, it also describes the probability of
									encountering that composition in a game.
								</p>
							</td>
						</tr>
						<tr className="appendix-table-body-row">
							<td className="appendix-table-body-cell-term">
								<h3>C O N T R O L L E D</h3>
								<h3>C O M P O S I T I O N A L</h3>
								<h3>W I N R A T E</h3>
							</td>
							<td className="appendix-table-body-cell-description">
								<p className="appendix-description-text">
									Compositions near the end of a game tend to accrue many more
									traits at much higher tiers. In order to gather more insights
									about what traits and trait combinations are superior, this
									needs to be accounted for, therefore, by default, a restricted
									quantity of traits (3) are selected for in the initial
									analytics configuration.
									<br />
									This allows us to control two very important factors:
									<br />
									Firstly, since the majority of compositions during a game do
									not make it past top 4, it is important to assess compositions
									that survived past the center stage of the game, and what
									compositions failed to do so.These compositions often have
									less traits, and lower overall tiers.
									<br />
									The current state of the Riot API doesn't allow us to see
									anything but the end result of the game, so in order to
									properly evaluate the winrate of a core aspect of the winning
									composition, avoiding trait combinations only possible with
									late-game gold is important.
									<br />
									Another important effect to account for is the cost of each
									composition, and how they sometimes must be played. If as a
									player, you accrue large interest by sacrificing health early
									on in the game, your final composition will likely be more
									expensive than the average, and much more volatile than a
									cheaper composition obtainable earlier in the game.
									<br />
									If you don't succeed in surviving the early game, and you
									can't reach a high enough tier for your selected traits, your
									composition will be in the bottom 4, suffer in its weighted
									average, despite actually having a very large power spike with
									a high win rate if it reaches critical mass.
									<br />
									Therefore, lower-tier versions of a composition will score
									much lower than higher-tier ones, and selecting trait
									combination by family instead of tier can often be more
									insightful, since you'll be calculating the losses of an
									incomplete composition with lower tiers, as well as the wins
									of that same composition with higher trait tiers.
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</span>
		);
	}
}

export default Appendix;
