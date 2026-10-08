import pytest

# Sample data for testing
player_stats = {
    'player_id': 1,
    'wins': 10,
    'losses': 5
}

@pytest.fixture
def setup_player_statistics():
    # Setup code to initialize player statistics
    return player_stats

def test_player_statistics_accessible(setup_player_statistics):
    # Simulate accessing player statistics from the main menu
    stats = setup_player_statistics
    assert stats['wins'] == 10
    assert stats['losses'] == 5
