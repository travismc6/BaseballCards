using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseballCardsCore.Migrations
{
    public partial class updates2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Cards",
                newName: "Notes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Notes",
                table: "Cards",
                newName: "Description");
        }
    }
}
