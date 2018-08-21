using Microsoft.EntityFrameworkCore.Migrations;

namespace AccordionFair.Migrations
{
    public partial class Added_DisregardOrder_Flag_To_Order : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "DisregardOrder",
                table: "Orders",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisregardOrder",
                table: "Orders");
        }
    }
}
