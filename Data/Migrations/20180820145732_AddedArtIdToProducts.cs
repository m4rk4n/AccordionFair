using Microsoft.EntityFrameworkCore.Migrations;

namespace AccordionFair.Migrations
{
    public partial class AddedArtIdToProducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ArtId",
                table: "Products",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ArtId",
                table: "Products");
        }
    }
}
